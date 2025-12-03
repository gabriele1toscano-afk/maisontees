import { Collection, Product, Testimonial } from './types';

export const HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBODPj50SdH8bKIt0-W59_EtEGuuu50YCdRCMX5dhl2bDRb7YPz7oSH2GYb8XnMGz68lHSadcfmCM1eJH_9QyfqW9Sb6CFXHxbqLybJC2EBsXaFEajTLckEH7hLxxxTwlQQ-R7SyO6rYhCM4oRdbXLQwfSu1sIQt78xdCyrhCorWX0k0R0B5LKQR7pFRFr-ccySjKOWXZWPONgDT9iX_frAbeu9CS6_upJ3kQrCLFJ15QQXlan5JVf0TbE8QEiSvuuvLMX8xPdsdqgi";

export const COLLECTIONS: Collection[] = [
  {
    id: 'c1',
    title: 'New Arrivals',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBm-Rtd-fe4TwP7UPYRBll36XuSLdszEaoQMioNzDud1THzpp0DEYIOQ8JjLq3vaB1tNw2InQXpD-OV8JnRv9dSeu-Fj0Mq4p0UiWjaXSkus3iTKJ17T7XSzmIWCk-znNbywNKalAZ9rwysx44EU70R3WaCirRh0j8rhg5u3GNzuNdLWdj3w2zOtJkTm5GJHa8er63rfmiWLanfbN1DnnOLcsk5EZ4YWEuVshpLTOQgsHw4rsFbc0Wry8ciLM7JkM8OYhPmZTU5bD5z",
    altText: "A person wearing a newly designed t-shirt with a minimalist graphic"
  },
  {
    id: 'c2',
    title: 'Best Sellers',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgQiuXVCIhly7RnSynzrxXFKo2PIBLeo7DqUWhLf9qkrwH-6TePVgwWLJ5_KzwGDocA3yLmFGzrK5fCVGCwmargL-YzocnKnLRwDWLVY5NIINd6cJhNrkP5AIA6wQ4BhAORbaPs0nBL1-pLJVtgWBKV3knL9q6oLjVJyUZ_rWtG1-9Kahb7wAOtG7HNjG3ey9Lgp7TrFnhGdbsUBPfZi5bU_sKvjBxz0gzO9r2AuLVBhgaZHLZM-BF8YtlsZu4-4ZLn68lUaExbu9c",
    altText: "A collection of the most popular t-shirts arranged neatly"
  },
  {
    id: 'c3',
    title: 'The Graphics Collection',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWoBEghiXJtcQAl0RVl_gtS41pavUd54x7p441oiwjT0035MT1NctmhOarISkDH5rJb6hQ3AaDQKOyp9UwMF7OTcQ3e43FH6faKGnwokJMIvpoDHZLOMhoS4xgjbMchrLLoP0krgnzCWLCBO-1SyzFXkqqwSDRnlDRX9gz6b8OlpQIJeLKQJPUY9ayyznBm_jYHmHV9WkIrAEgoSLuYp2OPc0JomVta1f0Do_xHI0RA6mY6sq-RSdIW_wwwJmLyZoZlPlJxB4UGlRM",
    altText: "A t-shirt with a bold and colorful graphic design"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    title: 'Midnight Graphic Tee',
    price: '$29.99',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDICSyhRySq-YVQN5tbHkJL7U8vxdQ7n0txDpHLkx0PLDYgvcF4s08IR1pdKR4dm5J0ugiLzFtW7KJP49dvzvKP0g_S7QA9V_7GZOHPZRt4fsq0nDsnw34ybrVKGKYukE-DBKPOmg2CV7KImbmeo58QhtysfFByclIQ69qswC2KOJpNgi-dHEmt2w6phDZtuH1yQ8BY3LXyVOTC_kPhR2c-H7noHCZW_3_gXXfoGnxbUiHmAMG3xFoK_rQMVNvpOrrqunW_-c9q3h4q",
    altText: "A black t-shirt with a minimalist design on a hanger"
  },
  {
    id: 'p2',
    title: 'Classic White Crew',
    price: '$24.99',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2XADGsaw9wXNfD6Hv1dLJyWMSJng_ojw93vr7i5QVGEAWeIdt-tfD5MJwF9OCasQMemiyYWtGpBLDC-CkLYnZMw5BYPE38SeytHUzh3CvM49B4oTieK5n1b8SxePmCo36aw8Dwg2c1_28E4TLH5NYNfhrzji_zlasppXdztW0bLGy70D1y91vn_9brND_eTR8U7TqsKzI5QYoz7ajRaBqa4UIWQ8Do66S4aNYcJ7BSyaNIbRnjStbVRQ2TjdLbmV0gQTOYIyKPk0_",
    altText: "A plain white t-shirt worn by a model"
  },
  {
    id: 'p3',
    title: 'Vintage Stripe Tee',
    price: '$34.99',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIP9zfK66AuV2zVHmcp7unDQjCrfKprELJlENuv6VitEbR1BUme9oa_VW4yOyl7Ispb_8x6G_oWKTncEJhOgz2jzTY8pZFBMi9fJYWSm2M34p9zktQYBrIVjLoALE_8kItUyCi5c4pb4mz4aBsT5eF7Sbw7aZ3IOuZhCr6bdDhZsMnCFpgSKRbVb5sioqGZmUMKIOJBGcru5SIswkuu1RxY3zdtwymx9iSxSF6oWhkSdM1ej99CbUrukRO078DzyKV1BKE_PlSHg0W",
    altText: "A vintage style striped t-shirt"
  },
  {
    id: 'p4',
    title: 'Everyday Heather Grey',
    price: '$24.99',
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_f4MWRmd11BSnCQkvCIRjVjw8Mmc74CZsbtS2paJ_s10jpxeVD_g7LwxAYhCLTBIbLD4jdx3M8Mc8-i9kZA7uqwhSfYV0M2svWqxak9wNgoIGbvjHAu5VyIV46rQRCqL-LtRWfHOTF4Nk8MZxwjV1Ip91lcTdfzi_RSmA4pPZRk8RBXHbdelSCY0UzJQ9eJHtkoTbeNc03zUXmB4aJcqQ36c6md59SEygqvXTxB0SFBdOVkz2t0tnV09NDNbMRu7Vfnhe4J2TxHGH",
    altText: "A heather grey t-shirt on a plain background"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "The quality is amazing! So soft and the print is perfect. I've already ordered two more.",
    author: "Alex J.",
    rating: 5
  },
  {
    id: 't2',
    quote: "Fast shipping and the t-shirt looks even better in person. Great designs you can't find anywhere else.",
    author: "Sarah K.",
    rating: 5
  },
  {
    id: 't3',
    quote: "Love the fit and the unique graphic on my tee. It's my new favorite shirt, hands down.",
    author: "Michael B.",
    rating: 4.5
  }
];