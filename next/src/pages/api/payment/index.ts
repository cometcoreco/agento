import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const auth = async(req: NextApiRequest, res: NextApiResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  //   return NextAuth(req, res, authOptions(req, res));
  const stripe = new Stripe('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')  
  try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
            mode: 'subscription',
          line_items: [
            {
              price: 'price_1NDuLVCwc6ur5tv2l1QUhaFZ',
              quantity: 1,
            },
          ],
          success_url: `http://localhost:3000`,
          cancel_url: 'http://localhost:3000',
    })
    console.log(session.url)
    res.json({url:session.url});
  } catch (err) {
    res.json({ error:err.message});
  }  
};

export default auth;
