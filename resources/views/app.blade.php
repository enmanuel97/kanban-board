<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}"/>
    <title>{{env('APP_NAME')}}</title>
    <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/>
</head>
<body>
    <div id="app">
        <router-view></router-view>
    </div>
    <script>
        window.userData = {!!json_encode([
            'isLoggedIn' => Auth::check() ? true : false,
            'user' => Auth::check() ? Auth::user() : null
        ])!!}
    </script>
	<script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
</body>
</html>
