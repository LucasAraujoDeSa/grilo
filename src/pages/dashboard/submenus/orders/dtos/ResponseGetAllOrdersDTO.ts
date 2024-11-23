export type ResponseGetAllOrdersDTO = {
  id: string;
  orderNo: string;
  amount: number;
  status: string;
  items: [
    {
      id: string;
      title: string;
      price: number;
      quantity: number;
    }
  ];
};
