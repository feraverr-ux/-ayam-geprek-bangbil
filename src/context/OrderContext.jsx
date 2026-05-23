import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

const OrderContext =
  createContext()

export function OrderProvider({
  children,
}) {

  const [orders, setOrders] =
    useState(() => {

      const savedOrders =
        localStorage.getItem(
          "orders"
        )

      return savedOrders
        ? JSON.parse(savedOrders)
        : []
    })

  useEffect(() => {

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    )

  }, [orders])

  const addOrder = (order) => {

    const newOrder = {
      ...order,
      status: "Menunggu",
    }

    setOrders((prev) => [
      ...prev,
      newOrder,
    ])
  }

  const updateOrderStatus = (
    id,
    newStatus
  ) => {

    setOrders((prev) =>
      prev.map((order) =>
        order.id === id
          ? {
              ...order,
              status: newStatus,
            }
          : order
      )
    )
  }

  return (

    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
      }}
    >

      {children}

    </OrderContext.Provider>
  )
}

export function useOrders() {

  return useContext(
    OrderContext
  )
}