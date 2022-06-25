import Head from "next/head";

function Skills() {
    return ( 
        <div className="flex flex-col justify-center p-5">
              <Head>
                <script async src="https://cdn1.stackshare.io/javascripts/client-code.js"></script>
            </Head>
            <div className="flex flex-col justify-center mb-2">
                <h2 className="font-semibold">Black belting skills</h2>
            </div>
            <div className="shadow-md">
                <a data-theme="light" data-layers="2,1,3,4" data-stack-embed="true" href="https://embed.stackshare.io/stacks/embed/e33559230764f11b9b49413c5893bc"></a>
            </div>
              </div>
     );
}

export default Skills;