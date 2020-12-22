const state: any = {
  swiperImgs: [],
  gridItems: []
};

const getters: any = {
  swiperImgs: () => state.swiperImgs,
};

const mutations: any = {
  saveSwiperImgs(states: any, data: any) {
    states.swiperImgs = data;
  },
  saveGridItems(states: { gridItems: any; }, data: any) {
    states.gridItems = data;
  }
};

const actions: any = {
  async swiperImgs({ commit }: any, _params: any) {
    // console.log('模拟请求出Banner数据-swiperImgs', _params);
    const res: any = {
      Code: 1,
      List: [
        { src: require("../../assets/202006040440.jpg"), name: '大益茶壶' },
        { src: require("../../assets/202006040441.jpg"), name: '大益茶' }
      ]
    };
    let JSON: any = _params.type === res.Code ? res.List : '暂无数据！';
    commit('saveSwiperImgs', JSON);
  },
  async getGridItems({ commit }: any, _params: any) {
    const res: any = {
      Code: 1,
      List: [
        {
          icon: 'meishi2',
          name: '茶品',
          inform: 1
        },
        {
          icon: 'dianying',
          name: '茶器',
          inform: 1
        },
        {
          icon: 'yule',
          name: '茶服',
          inform: 1
        },
        {
          icon: 'waimai',
          name: '益元素'
        },
        {
          icon: 'zhusujiedai',
          name: '拾春记'
        },
        {
          icon: 'chaoshi',
          name: '超市'
        },
        {
          icon: 'chepai',
          name: '打车'
        },
        {
          icon: 'chongzhi',
          name: '充值'
        },
        {
          icon: 'lvyou',
          name: '旅游'
        }
      ]
    }
    commit('saveGridItems', res.List);
    return res.List;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
