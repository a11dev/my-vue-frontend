import { defineStore } from "pinia";

export const useTaskListStore = defineStore({
  id: "taskList",
  state: () => ({
    tasks: [
      { key: "1", status: "assigned" },
      { key: "2", status: "work" },
      { key: "3", status: "closed" },
    ],
    task: null,
    loading: false,
    error: null,
    tasksfilter: "",
    visibletask: 0,
  }),
  getters: {
    getTaskPerKey: (state) => {
      return (taskKey) => state.tasks.filter((task) => task.key === taskKey);
    },
    getTaskCounter: (state) => {
      if (state.tasksfilter === "") return state.tasks.length;
      return state.visibletask;
    },
    getFilteredTasks: (state) => {
      if (state.tasksfilter === "") return state.tasks;
      let filteredtask = state.tasks.filter((task) => {
        let re = new RegExp(state.tasksfilter, "gi");
        return task.status.match(re);
      });
      state.visibletask = filteredtask.length;
      return filteredtask;
    },
  },
  actions: {
    addTask() {
      this.tasks.push({ key: "4", status: "work" });
    },
    async fetchTasks() {
      this.tasks = [];
      this.loading = true;
      try {
        this.tasks = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },

    async fetchTask(id) {
      this.task = null;
      this.loading = true;
      try {
        this.task = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        ).then((response) => response.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
