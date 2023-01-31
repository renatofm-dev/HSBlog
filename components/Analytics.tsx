import Script from "next/script"
//Component of GTAG
export const Analytics = () => (
    <>
    <Script 
    async src="https://www.googletagmanager.com/gtag/js?id=G-0KFPQ140J7"/>
    <Script dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING}', {page_path: window.location.pathname,
        });
        `
    }}/>
    </>
)