import { siteTitle } from "../components/layout";
import Layout from "../components/layout";
import Head from "next/head";

export default function contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
        </Layout>
    );
};