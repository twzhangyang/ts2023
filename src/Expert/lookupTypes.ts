type Payment = {
    person: {
        name: string,
        email: string,
        address: {
            street: string,
            city: string,
        }[]
    },
    method: {
        type: 'credit' | 'debit',
        amount: number,
    }
}

type PaymentRequestA = Payment['method'];
type Address = Payment['person']['address'][0];

