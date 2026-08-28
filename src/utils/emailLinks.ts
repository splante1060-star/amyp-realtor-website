const AMY_EMAIL = "amyplanterealtor@gmail.com";

function createEmailLink(subject: string, body: string) {
  return `mailto:${AMY_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export const buyerEmailLink = createEmailLink(
  "Question about buying a home",
  `Hi Amy,

I'm thinking about buying a home and would like to ask a few questions.

My name:
Preferred location:
Approximate timing:
What I'd like help with:

Thank you,`,
);

export const sellerEmailLink = createEmailLink(
  "Question about selling my home",
  `Hi Amy,

I'm thinking about selling a home and would like to ask a few questions.

My name:
Property location:
Approximate timing:
What I'd like help with:

Thank you,`,
);

export const buySellEmailLink = createEmailLink(
  "Question about buying or selling a home",
  `Hi Amy,

I'm considering buying or selling a home and would like to ask a few questions.

My name:
Are you considering buying, selling, or both?
Preferred area or property location:
Approximate timing:
What I'd like help with:

Thank you,`,
);

export const divorceEmailLink = createEmailLink(
  "Question about divorce real estate",
  `Hi Amy,

I'd like to ask a few questions about handling real estate during divorce.

My name:
Property location:
What I'd like help understanding:

Thank you,`,
);

export const prepToSellEmailLink = createEmailLink(
  "Question about preparing my home to sell",
  `Hi Amy,

I'm considering selling a home and would like guidance on what may be worth doing before listing.

My name:
Property location:
Approximate timing:
What I'd like help with:

Thank you,`,
);

export const estateDownsizingEmailLink = createEmailLink(
  "Question about downsizing or an estate property",
  `Hi Amy,

I'd like to ask a few questions about downsizing or preparing an estate property for sale.

My name:
Property location:
What I'd like help with:

Thank you,`,
);

export const investmentEmailLink = createEmailLink(
  "Question about an investment or vacation property",
  `Hi Amy,

I'm considering an investment, vacation, or second-home property and would like to ask a few questions.

My name:
Area I'm considering:
How I may use the property:
What I'd like help with:

Thank you,`,
);
