const getProducts = async (): Promise<[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = response.json();

  return (data as any) || [];
};

export default getProducts;
