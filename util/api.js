const BASE_URL = 'http://124.223.107.207:3001'
export const myRequest = (options) => {
	return new Promise((resolve,reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			data: options.data || {},
			success: (res)=>{
				if(res.statusCode !== 200){
					return uni.showToast({
						title:"数据请求失败"
					})
				}
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})

}