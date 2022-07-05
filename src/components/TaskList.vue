<script setup>
import { ref } from "vue";
import { useTaskListStore } from "@/stores/TaskList";

const taskListStore = useTaskListStore();

function addTask() {
  console.log("comp add task");
  taskListStore.addTask();
}
</script>
<template>
  <div class="flex">
    <div class="d-col-8  t-col-8 m-col-8"> <input
        type="text"
        v-model="taskListStore.tasksfilter"
        class="tasklistfilter d-col-10 t-col-10 m-col-10"
        placeholder="Ricerca.."
        title="Type in a name"
      /></div>
    <div class="d-col-4  t-col-4 m-col-4" style="font-size: 2em;"> #{{ taskListStore.getTaskCounter }}</div>
    <div class="d-col-12  t-col-12 m-col-12">
      <div
        v-for="task in taskListStore.getFilteredTasks"
        :key="task.key"
        class="tkitmclass"
      >
        {{ task.status }}
      </div>
    </div>
    <button @click="addTask" style="font-size: 2em;margin-top: 20px; border-radius: 10px;">Add 1</button>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* .flex:nth-child(odd) div {background: #999; padding: 1rem 0;}
.flex:nth-child(even) div {background: #555; padding: 1rem 0;} */


.tkitmclass {
  font-size: 2rem;
  box-shadow: 0 6px 15px rgba(0,0,0,2);
  padding-left: 5px;
  border-radius: 4px;
  margin-top: 10px;
}

.tasklistfilter {
  background-image: url("@/assets/searchicon.png");
  background-position: 10px 12px;
  background-repeat: no-repeat;
  font-size: 16px;
  padding: 12px 20px 12px 42px;
  border: 1px solid #ddd;
}

@media (min-width: 980px) {
  .flex {
    padding-left: 6%;
    padding-right: 6%;
  }

  .flex-grid {
    margin-top: 2rem;
  }
  .flex-grid:first-child {
    margin-top: 0;
  }

  .d-col-1 {
    width: 7.05%;
  }
  .d-col-2 {
    width: 15.5%;
  }
  .d-col-3,
  .d-col-thirds {
    width: 23.95%;
  }
  .d-col-4,
  .d-col-quarters {
    width: 32.4%;
  }
  .d-col-5 {
    width: 40.85%;
  }
  .d-col-6,
  .d-col-halfs {
    width: 49.3%;
  }
  .d-col-7 {
    width: 57.75%;
  }
  .d-col-8 {
    width: 66.2%;
  }
  .d-col-9 {
    width: 74.65%;
  }
  .d-col-10 {
    width: 83.1%;
  }
  .d-col-11 {
    width: 91.55%;
  }
  .d-col-12,
  .d-col-full {
    width: 100%;
  }
}

@media only screen and (min-width: 661px) and (max-width: 979px) {
  .flex {
    padding-left: 5%;
    padding-right: 5%;
  }

  .flex-grid {
    flex-flow: row wrap;
  }

  .t-col-4,
  .t-col-6,
  .t-col-12 {
    margin-top: 2rem;
  }

  .t-col-4 {
    width: 31.46%;
  }
  .t-col-6 {
    width: 48.6%;
  }
  .t-col-12 {
    width: 100%;
  }

  .flex:first-child .t-col-4,
  .flex:first-child .t-col-6,
  .flex:first-child .t-col-12 {
    margin-top: 0;
  }
}

@media only screen and (min-width: 0px) and (max-width: 660px) {
  .flex {
    padding-left: 3%;
    padding-right: 3%;
  }

  .flex-grid {
    flex-flow: row wrap;
  }

  .m-col-6,
  .m-col-12 {
    margin-top: 2rem;
  }

  .m-col-6 {
    width: 47.2%;
  }
  .m-col-12 {
    width: 100%;
  }

  .flex:first-child .m-col-6,
  .flex:first-child .m-col-12 {
    margin-top: 0;
  }
}
</style>
