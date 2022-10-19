import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './Customers.css'

export const CustomerDetails = () => {
    const { customerId } = useParams()
    const [customer, updateCustomer] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/customers?_expand=user&id=${customerId}`)
            .then(res => res.json())
            .then((data) => {
                const singleCustomer = data[0]
                updateCustomer(singleCustomer)})
        }, [customerId]

    )


    return <>
        <section className="customer">
        <header className="customer__header">{customer?.user?.fullName}</header>
        <div>E-mail: {customer?.user?.email}</div>
        <div>Phone: {customer.phoneNumber}</div>
        <div>Address: {customer.address}</div>
        </section>
    </>
}

// should display the full name, email, phone number, and address of the customer when the customer's name is clicked in the list view.