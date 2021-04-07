import router from '@/router';
import {TASK_MODE_ALL} from '@/constants/task';

export default {
  namespaced: true,
  state: {
    sidebarCollapsed: false,
    actionsCollapsed: false,
    tabs: [
      {id: 'overview', title: 'Overview'},
      {id: 'files', title: 'Files'},
      {id: 'tasks', title: 'Tasks'},
      {id: 'settings', title: 'Settings'},
    ],
    dialogVisible: {
      create: false,
      edit: false,
      clone: false,
      run: false,
      delete: false,
    },
    // TODO: dummy data
    spiderForm: {
      name: 'spider-1',
      display_name: 'Spider 1',
      cmd: 'python main.py',
      param: '--level=DEBUG',
      mode: TASK_MODE_ALL,
      project_id: '1',
    },
  },
  getters: {
    // tab name for spider detail
    tabName: () => {
      const arr = router.currentRoute.value.path.split('/');
      if (arr.length < 3) return null;
      return arr[3];
    }
  },
  mutations: {
    setSidebarCollapsed: (state: SpiderStoreState, value: boolean) => {
      state.sidebarCollapsed = value;
    },
    setActionsCollapsed: (state: SpiderStoreState, value: boolean) => {
      state.actionsCollapsed = value;
    },
    showDialog: (state: SpiderStoreState, key: SpiderDialogKey) => {
      state.dialogVisible[key] = true;
    },
    hideDialog: (state: SpiderStoreState, key: SpiderDialogKey) => {
      state.dialogVisible[key] = false;
    },
    resetDialogs: (state: SpiderStoreState) => {
      for (const key in state.dialogVisible) {
        state.dialogVisible[key as SpiderDialogKey] = false;
      }
    },
    setSpiderForm: (state: SpiderStoreState, value: Spider) => {
      state.spiderForm = value;
    },
  },
  actions: {}
} as SpiderStoreModule;
