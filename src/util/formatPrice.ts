export const formatPrice = (price: string, currencyCode: string) =>
	new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currencyCode ?? 'USD',
	}).format(parseInt(price, 10));
