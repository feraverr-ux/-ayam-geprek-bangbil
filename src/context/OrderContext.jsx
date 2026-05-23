import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"

import {
  ref,
  push,
  onValue,
  update,
} from "firebase/database"

import { database }
  from "../firebase/config"

const OrderContext =
  createContext()

export function OrderProvider({
  children,
}) {

  const [orders, setOrders] =
    useState([])

  useEffect(() => {

    const ordersRef =
      ref(database, "orders")

    onValue(
      ordersRef,
      (snapshot) => {

        const data =
          snapshot.val()

        if (data) {

          const loadedOrders =
  Object.entries(data)
    .filter(
      ([id, value]) =>
        id &&
        value &&
        Array.isArray(
          value.items
        )
    )
    .map(
      ([firebaseId, value]) => ({
        firebaseId,
        ...value,
      })
    )

          setOrders(
            loadedOrders
          )

        } else {

          setOrders([])

        }
      }
    )

  }, [])

  const addOrder = async (
    order
  ) => {

    const ordersRef = ref(
      database,
      "orders"
    )

    const cleanOrder = {
      customer:
        order.customer || "",

      phone:
        order.phone || "",

      address:
        order.address || "",

      note:
        order.note || "",

      paymentMethod:
        order.paymentMethod || "",

      total:
        Number(order.total) || 0,

      status: "Menunggu",

      items: Array.isArray(
        order.items
      )
        ? order.items.map(
            (item) => ({
              name:
                item.name || "",

              price:
                Number(
                  item.price
                ) || 0,

              quantity:
                Number(
                  item.quantity
                ) || 1,

              image:
                item.image || "",
            })
          )
        : [],
    }

    await push(
      ordersRef,
      cleanOrder
    )
  }

  const updateOrderStatus =
    async (
      firebaseId,
      newStatus
    ) => {

      if (!firebaseId)
        return

      try {

        const orderRef =
          ref(
            database,
            `orders/${firebaseId}`
          )

        await update(
          orderRef,
          {
            status: newStatus,
          }
        )

      } catch (error) {

        console.log(
          "Update error:",
          error
        )
      }
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