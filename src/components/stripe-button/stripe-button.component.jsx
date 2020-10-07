import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const PriceForStripe = price* 100;
    const publishableKey = 'pk_test_51HZ47YCevvooPVXjvQVUZU8rYor7714btyt40Cqt8AH45lp2UNTSoDJ6XEdxKcGHKdX9WUykoQg1Ako3iwXssuOc00AxsLdLj2'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
        label='Pay Now'
        name='King Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={PriceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );

}

export default StripeCheckoutButton;