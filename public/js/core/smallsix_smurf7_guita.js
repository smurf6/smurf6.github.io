window.guita ={
    /**
     * 首页滚图
     *
     */
    homebar: function(data, callback){
        ajax.async_post(window.apiurl + "10" ,data ,callback);
    },

}