import {
    ADD_COUNTER,
    ADD_TO_CART
} from './mutations-type'


export default  {
    addCart(context, payload) {
        //异步操作
        return new Promise((resolve, reject) => {
            // state.cartList.push(payload);
            // let oldPorduct = null
            // for (let item of context.cartList) {
            //     if (item.iid === payload.iid) {
            //         oldPorduct = item
            //     }
            // if(oldpayload) {
            //     state.cartList.conunt++
            // }else {
            //     state.cartList.conunt = 1
            //     state.cartList.push(payload);
            // }
            // }
            //1.查找之前数组中是否有该商品

            let oldPorduct = context.state.cartList.find(item => item.iid === payload.iid)
            // find(item => item.iid === payload.iid)
            //2.判断oldProduct
            if (oldPorduct) {
                // oldPorduct.conunt += 1

                context.commit(ADD_COUNTER, oldPorduct)
                resolve('当前商品数量+1')
            } else {
                payload.conunt = 1
                context.commit(ADD_TO_CART, payload)
                resolve('添加到购物车成功')
            }

        })

    }

}