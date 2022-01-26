<template>
    <div class="container py-5">
        <div class="row">
            <div class="col-12 col-lg-4">
                <div class="card mb-3 card-element">
                    <div class="card-header bg-light">
                        <h3 class="card-title h5 mb-1">
                            Buffer
                            <span class="badge bg-primary text-white float-end">{{bufferTasks.length}}</span>
                        </h3>
                    </div>
                    <draggable class="card-body" id="buffer" v-model="bufferTasks" group="task" @change="updateTaskStatus">
                        <div class="card mb-3 cursor-grab" @click="editTask(task.id)" v-for="task in bufferTasks" :key="task.id">
                            <div class="card-body" v-bind:class="{'color-red': validateDate(task.due_date)}">
                                <h5 class="mb-0">{{task.title}}</h5>
                                <p class="mb-0">Fecha de entrega: {{formatDate(task.due_date)}}</p>
                            </div>
                        </div>
                    </draggable>
                    <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#task-modal" id="add-task" class="btn btn-primary w-100">Add</a>
                </div>
            </div>
            <div class="col-12 col-lg-4">
                <div class="card mb-3 card-element">
                    <div class="card-header bg-light">
                        <h3 class="card-title h5 mb-1">
                            Working
                            <span class="badge bg-primary text-white float-end">{{workingTasks.length}}</span>
                        </h3>
                    </div>
                    <draggable class="card-body" id="working" v-model="workingTasks" group="task" @change="updateTaskStatus">
                        <div class="card mb-3 cursor-grab" v-for="task in workingTasks" :key="task.id">
                            <div class="card-body" v-bind:class="{'color-red': validateDate(task.due_date)}">
                                <h5 class="mb-0">{{task.title}}</h5>
                                <p class="mb-0">Fecha de entrega: {{formatDate(task.due_date)}}</p>
                            </div>
                        </div>
                    </draggable>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="card mb-3 card-element">
                    <div class="card-header bg-light">
                        <h3 class="card-title h5 mb-1">
                            Done
                            <span class="badge bg-primary text-white float-end">{{ doneTasks.length }}</span>
                        </h3>
                    </div>
                    <draggable class="card-body" id="done" v-model="doneTasks" group="task" @dragenter="countEvent=0" @change="updateTaskStatus">
                        <div class="card mb-3 cursor-grab" v-for="task in doneTasks" :key="task.id">
                            <div class="card-body">
                                <h5 class="mb-0">{{task.title}}</h5>
                                <p class="mb-0">Fecha de entrega: {{formatDate(task.due_date)}}</p>
                            </div>
                        </div>
                    </draggable>
                </div>
            </div>
        </div>
        <div class="modal fade" id="task-modal" tabindex="-1" aria-labelledby="task-modal-label" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="task-modal-label">{{isEditing ? 'Edit Task' : 'Create Task'}}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <label for="title">Title</label>
                                <input type="text" class="form-control" v-model="task.title" id="title">
                                <div v-if="errors != null && typeof errors['title'] != 'undefined'" style="display: block" class="invalid-feedback">{{errors['title']}}</div>
                            </div>
                            <div class="form-group">
                                <label>Due Date</label>
                                <datepicker :format="formatDate" input-class="form-control" name="due_date" v-model="task.due_date" id="due_date"></datepicker>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" id="close-modal" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="handleSubmit">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { validateFormAndGetErrors } from "../../helper";
import Datepicker from 'vuejs-datepicker';
import draggable from "vuedraggable";
import moment from "moment";

export default {
    name: "dashboard",
    components: {
        Datepicker,
        draggable
    },
    data() {
        return {
            from: '',
            to: '',
            countEvent: 0,
            isEditing: false,
            errors: null,
            task: {
                title: '',
                due_date: new Date()
            },
            processing: false
        }
    },
    computed : {
        bufferTasks: {
            get() {
                return this.$store.state.tasks.tasks.buffer;
            },
            set(value) {
                this.handleDragEvent(1, 'buffer', value);
            }
        },
        workingTasks: {
            get() {
                return this.$store.state.tasks.tasks.working;
            },
            set(value) {
                this.handleDragEvent(2, 'working', value);
            }
        },
        doneTasks: {
            get() {
                return this.$store.state.tasks.tasks.done;
            },
            set(value) {
                this.handleDragEvent(3, 'done', value);
            }
        },
    },
    methods: {
        ...mapActions({
            setTasks: 'tasks/setTasks',
            setTask: 'tasks/setTask',
            updateTaskS: 'tasks/updateTask',
            setTasksByType: 'tasks/setTasksByType',
        }),
        formatDate(date) {
            return moment(date).format('DD-MM-YYYY');
        },
        validateDate(date) {
            return this.formatDate(date) < this.formatDate(new Date());
        },
        handleSubmit() {
            if (this.isEditing) {
                this.updateTask();
            } else {
                this.saveTask();
            }
        },
        handleDragEvent(type, key, value) {
            if(this.from == '') {
                this.from = key;
            }  else {
                this.to = key;
            }
            console.log(type, key, value);
            this.setTasksByType({key, value});
        },
        async getTasks() {
            let response = await axios.get('/api/tasks');
            if(response.data.status == 200) {
                let buffer = [],
                    working = [],
                    done = [];
                response.data.tasks.forEach(task => {
                    if(task.status_id == 1) {
                        buffer.push(task);
                    } else if(task.status_id == 2) {
                        working.push(task);
                    } else if(task.status_id == 3) {
                        done.push(task);
                    }
                });
                let tasks = {
                    buffer: buffer,
                    working: working,
                    done: done
                };
                this.setTasks(tasks);
            }
        },
        async editTask(id) {
            let response = await axios.get('/api/tasks/' + id);
            if(response.data.status == 200) {
                this.task = response.data.task;
                this.isEditing = true;
                document.querySelector('#add-task').click();
            }
        },
        async saveTask() {
            let [valid, errors] = await validateFormAndGetErrors(this.task);
            if(valid) {
                this.processing = true;
                let response = await axios.post('/api/tasks', this.task);

                document.querySelector('#close-modal').click();
                this.processing = false;

                if(response.data.status == 200) {
                    this.setTask({key: 'buffer', value: response.data.task});
                } else {
                    alert('Something went wrong, please try again later.');
                }
            } else {
                this.errors = errors;
            }
        },
        async updateTask() {
            let [valid, errors] = await validateFormAndGetErrors(this.task);
            if(valid) {
                this.processing = true;
                let response = await axios.put('/api/tasks/' + this.task.id, this.task);

                document.querySelector('#close-modal').click();
                this.processing = false;

                if(response.data.status == 200) {
                    let type = this.task.status_id == 1 ? 'buffer' : this.task.status_id == 2 ? 'working' : 'done';
                    this.updateTaskS({key: type, value: response.data.task});
                } else {
                    alert('Something went wrong, please try again later.');
                }
            } else {
                this.errors = errors;
            }
        },
        async updateTaskStatus(e) {
            this.countEvent++;
             let event = e;
             if(typeof event.added != 'undefined') {
                 let task = event.added.element;
                 // task.status_id = this.type;
                 let response = await axios.put('/api/tasks/' + task.id, task);

                 if (response.data.status == 200) {
                     if (task.status_id === 3) {
                         alert('Felicitaciones por lograrlo!');
                     }
                 } else {
                     alert('Something went wrong, please try again later.');
                 }
             }
        }
    },
    async mounted() {
        let me = this;
        document.querySelector("#task-modal").addEventListener('hidden.bs.modal', function (event) {
            me.errors = null;
            me.task = {
                title: '',
                due_date: new Date()
            }
        });
        await this.getTasks();
    },
}
</script>
