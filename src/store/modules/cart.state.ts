// initial state
const state = () => ({
  list: []
});

// getters
const getters = {
  cartCount: (state: any) =>
    state.list
      .map((item: any) => item.quantity)
      .reduce((acc: any, curr: any) => acc + curr, 0),
  cartTotal: (state: any, _: any, rootState: any) =>
    state.list
      .map((c: any) => rootState.coffees.list.find((x: any) => x.name === c.name).price * c.quantity)
      .reduce((acc: any, curr: any) => acc + curr, 0),
  cartList: (state: any, _: any, rootState: any) =>
    state.list
      .map((item: any) => {
        // get coffee object by name
        const { price, ...props } = rootState.coffees.list.find(
          c => c.name === item.name
        );

        return {
          quantity: item.quantity,
          unitPrice: price,
          price: item.quantity * price, // sum quantity
          ...props
        };
      })
      .sort((a: any, b: any) => (a.name < b.name ? -1 : 1))
}

// actions
const actions = {
}

// mutations
const mutations = {
  setCartList(state: any, { items }: any) {
    state.list = items
  },
  addToCart(state: any, coffee: any) {
    const { quantity = 0 } = state.list.find((x: any) => x.name === coffee) || {}

    const list = [
      ...state.list.filter((x: any) => x.name !== coffee),
      {
        name: coffee, quantity: quantity + 1
      }
    ];

    state.list = list
  },
  emptyCart(state:any) {
    state.list = []
  },
  removeCartItem(state: any, coffee: any) {
    const list = [...state.list.filter((x: any) => x.name !== coffee)]

    state.list = list
  },
  addOneCartItem(state: any, coffee: any) {
    mutations.addToCart(state, coffee)
  },
  removeOneCartItem(state: any, coffee: any) {
    const item = state.list.find((x: any) => x.name === coffee);

    const list = [
      ...state.list.filter((x: any) => x.name !== coffee),
      ...(item.quantity - 1 <= 0 ? [] : [{ name: item.name, quantity: item.quantity - 1 }])
    ];

    state.list = list
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}