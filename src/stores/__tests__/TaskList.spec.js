import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTaskListStore } from "../TaskList.js";

describe("TaskStore List Test", () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it"s automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });
  it("get task per count", () => {
    const taskListStore = useTaskListStore();
    taskListStore.tasks = [
      { key: "1", status: "assigned" },
      { key: "2", status: "work" },
      { key: "3", status: "closed" },
    ];
    const func = taskListStore.getTaskPerKey;
    expect(func("1")).toHaveLength(1);
  });

  it("get task per key", () => {
    const taskListStore = useTaskListStore();
    taskListStore.tasks = [
      { key: "1", status: "assigned" },
      { key: "2", status: "work" },
      { key: "3", status: "closed" },
    ];
    const func = taskListStore.getTaskPerKey;
    expect(func("1")[0]["status"]).toBe("assigned");
  });
});
