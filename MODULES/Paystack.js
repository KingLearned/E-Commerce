const paystack = require('paystack')('sk_test_4fc85ba8edcf7b8df641f8eb9b80e0514f78a42e');

const initiatePayment = (amount, email, callbackUrl, metadata) => {

    const data = {
      amount: amount * 100, // amount in kobo
      email,
      callback_url: callbackUrl,
      metadata,
    };
  
    return paystack.transaction.initialize(data);
}

const verifyPayment = (reference) => {
    return paystack.transaction.verify(reference);
}
  
module.exports = { initiatePayment, verifyPayment }