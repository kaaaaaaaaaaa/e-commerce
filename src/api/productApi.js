import axiosClient from './axiosClient';

const productsApi = {
  getAll(params) {
    // Transform _page to _start
    const newParams = { ...params };
    //add property _start to newParams
    newParams._start =
      !params._page || params._page <= 1
        ? 0
        : (newParams._page - 1) * newParams._limit; // items skiped
    // Remove un-needed ke
    delete newParams._page;
    // Fetch product list + count
    const productList = axiosClient.get('/products', { params: newParams });
    const count = axiosClient.get('/products/count', { params: newParams });

    //
    return {
      data: productList,
      pagination: {
        page: params._page,
        limit: params._limit,
        total: count,
      },
    };
  },
  get(id) {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
  add(data) {
    const url = '/products';
    return axiosClient.post(url, data);
  },
  update(data) {
    const url = `/products/${data.id}`;
    return axiosClient.patch(url, data);
  },
  remove(id) {
    const url = `/products/${id}`;
    return axiosClient.delete(url);
  },
};
export default productsApi;
