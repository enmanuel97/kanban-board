<?php

namespace App\Http\Controllers\API;

use Session;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;

class AuthController extends Controller
{
    /**
     * Register
     */
    public function register(Request $request)
    {
        try {
            $user           = new User();
            $user->name     = $request->name;
            $user->email    = $request->email;
            $user->password = Hash::make($request->password);
            $user->save();

            $tokenResult = $user->createToken("authToken")->plainTextToken;

            return response()->json([
                "result" => true,
                "status_code"   => 200,
                "access_token"  => $tokenResult,
                "user_data"     => $user
            ]);

        } catch (\Illuminate\Database\QueryException $ex) {
            $message = $ex->getMessage();

            return response()->json([
                "result" => false,
                "status_code" => 200,
                "message" => $message
            ]);
        }
    }

    /**
     * Login
     */
    public function login(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];

        if (Auth::attempt($credentials)) {
            $user = User::where("email", strtolower($request->email))->first();
            $tokenResult = $user->createToken("authToken")->plainTextToken;

            return response()->json([
                "result" => true,
                "status_code"   => 200,
                "access_token"  => $tokenResult,
                "user_data"     => $user
            ]);
        } else {
            return response()->json([
                "status_code" => 500,
                "message" => "Unauthorized"
            ]);
        }
    }
}
