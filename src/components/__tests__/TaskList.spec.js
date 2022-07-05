import { describe, it, expect } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { mount } from "@vue/test-utils";
import TaskList from "@/components/TaskList.vue";
import { useTaskListStore } from "@/stores/TaskList.js";

describe("TaskList Test", () => {
  const wrapper = mount(TaskList, {
    global: {
      plugins: [createTestingPinia()],
    },
  });

  const taskListStore = useTaskListStore(); // uses the testing pinia!
  // taskListStore.tasks = [{ key: "1", status: "assigned" }];

  it("renders properly", () => {
    expect(wrapper.find("input").exists()).toBeTruthy();
  });
  it("textfilter input", async () => {
    const input = wrapper.find("input");
    await input.setValue("my@mail.com");
    expect(input.element.value).toBe("my@mail.com");
    await input.setValue("");
  });
  it("it render all tasks ", async () => {
    await taskListStore.$patch({ tasks: [{ key: "1", status: "assigned" }] });
    const input = wrapper.find("input");
    await input.setValue("");
    const tasksdiv = wrapper.findAll("div .tkitmclass");
    expect(tasksdiv.length).toBe(1);
  });
  it("it render all tasks ", async () => {
    await taskListStore.$patch({ tasks: [{ key: "1", status: "assigned" },{ key: "2", status: "assigned" },{ key: "3", status: "work" },{ key: "4", status: "completed" }] });
    const input = wrapper.find("input");
    await input.setValue("assig");
    const tasksdiv = wrapper.findAll("div .tkitmclass");
    expect(tasksdiv.length).toBe(2);
  });
});

// import { describe, it, expect, vi } from "vitest";
// import { mount } from "@vue/test-utils";
// import { createTestingPinia } from "@pinia/testing";
// import { TaskList } from "@/components/TaskList.vue";
// import { useTaskListStore } from "@/stores/TaskList.js";

// describe("TaskList", () => {
//   // per inizializzare lo store prima di creare il compo
//   // const pinia = createTestingPinia()
//   // pinia.state.value[storeId] = {
//   //   // initial state for the store
//   // }

//   // , {
//   // global: {
//   //   plugins: [createTestingPinia({ createSpy: vi.fn() })],
//   // },
//   // });

//   // const taskListStore = useTaskListStore(); // uses the testing pinia!

//   it("store function is called", () => {
//     const wrapper = mount(TaskList);
//     // arrange
//     // const spy = vi.spyOn(taskListStore, "resetStatus");
//     expect(wrapper.contains("h3")).toBe(true);
//   });

//   // it("rendery properly", () => {
//   //   expect(wrapper.text()).toBe("Hello World");
//   // });

//   // it("should mount", async () => {
//   //   const wrapper = await mount(TaskList, {
//   //     props: {
//   //       component: "MyComponent",
//   //       anotherProp: "abc", // will be passed to child component
//   //     },
//   //     global: {
//   //       plugins: [createPinia()], // initializes Pinia
//   //       stubs: { MyComponent },
//   //     },
//   //   });
//   //   await flushPromises(); // make sure all promises in lifecycle hooks are resolved
//   //   expect(wrapper.exists()).toBe(true);
//   //   // further assertions

//   //   // const wrapper = mount(TaskItem, { props: { msg: '12345' } })
//   //   // expect(wrapper.text()).toContain('12345')
//   // });
// });
