# DRY: one rule, one place, in TypeScript

> Change a business rule once and have every feature pick it up.

[Watch the video](https://www.youtube.com/watch?v=DB0joiRsJuY) · [Step through it interactively](https://illbebackend.dev/lessons/dry/typescript/)

## The problem

The member limit is added to shippingFee and bannerText by hand. receiptLine is missed and still uses 50.

## Steps

Each folder holds the complete `shipping.ts` after that step, and every one compiles. Diff two neighbouring folders to see a single refactoring.

| Step | What changes | Move |
|---|---|---|
| [01](step-01-three-features-one-rule/) | Three features, one rule: shippingFee, bannerText and receiptLine each test subtotal >= 50 on their own. The fee 4.99 is typed twice. | Before |
| [02](step-02-members-ship-free-from-25/) | Members ship free from 25: The member limit is added to shippingFee and bannerText by hand. receiptLine is missed and still uses 50. | Code smell |
| [03](step-03-undo-then-give-it-a-home/) | Undo, then give it a home: Back the member change out. Gather the limit, the fee and the check at the top of the module, then add members again. | Plan |
| [04](step-04-name-the-limit/) | Name the limit: The four copies of 50 become FREE_SHIPPING_FROM at the top of the module. | Replace Magic Number with Constant |
| [05](step-05-name-the-fee/) | Name the fee: The two copies of 4.99 become SHIPPING_FEE. | Replace Magic Number with Constant |
| [06](step-06-name-the-check/) | Name the check: The comparison moves into shipsFree(cart). shippingFee calls it. | Extract Function |
| [07](step-07-the-banner-asks-too/) | The banner asks too: bannerText's hand-written check becomes !shipsFree(cart). | Replace Inline Code with Function Call |
| [08](step-08-the-receipt-asks-too/) | The receipt asks too: receiptLine calls shipsFree(cart). The comparison now exists once. | Replace Inline Code with Function Call |
| [09](step-09-name-the-gap/) | Name the gap: The banner's subtraction moves into amountToFreeShipping(cart), next to shipsFree. | Extract Function |
| [10](step-10-members-in-one-helper/) | Members, in one helper: The member limit is a new constant and one helper, freeShippingFrom. The three feature functions don't change. | Payoff |

## Takeaways

- **Use it when:** One business rule, number or decision shows up in more than one feature.
- **Skip it when:** Two lines look alike but follow different rules, like a shipping fee and a gift wrap fee that both cost 4.99.
- **Spot it by:** The same literal or condition in several functions, and changes that start with a search.
