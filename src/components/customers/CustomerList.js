import { useState, useEffect } from "react"
import { Customer } from "./Customer"
import "./Customers.css"

export const CustomerList = () => {
    const [customers, setCustomer] = useState([])


    useEffect(
        () => {
            fetch('http://localhost:8088/customers?_expand=user')
            .then(res => res.json())
            .then((customerData) => {
                setCustomer(customerData)
            })
        }, []
    )

    return <article className="customers">
        {
            customers.map(customer => < Customer key={customer.id}
                id={customer?.user?.id}
                fullName={customer?.user?.fullName}
                phoneNumber={customer.phoneNumber}
                address={customer.address} />)
        }
        </article>
}