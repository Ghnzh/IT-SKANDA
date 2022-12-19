import Link from "next/link";
import Head from "next/head";
import { Navbar } from "../components/navbar";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | SMKN 2 PKU - Informatics Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="flex h-screen">
        <div className="lg:w-1/2 bg-banana bg-cover relative">
          <div className="-translate-x-80 translate-y-12 scale-[1.2]" data-v-210b0a8f="" theme="banana">
            <svg fill="none" viewBox="0 0 608 628" xmlns="http://www.w3.org/2000/svg" className="shape shape-banana desktop-only" data-v-210b0a8f="">
              <path
                d="M325.131 22.266a17.015 17.015 0 0 0-3.026-1.964 662.303 662.303 0 0 0-17.877-8.736 18.479 18.479 0 0 0-2.862-1.06c-10.267-2.892-20.423-6.578-31.133-7.403-2.295-.137-4.59-.6-6.886-.892-3.276-.415-6.686-.754-9.966-1.132-.16-.019-.32-.039-.479-.061-3.503-.396-7.038-1.257-10.571-.615-9.701 1.39-19.443 2.43-29.131 3.815-6.915 1.755-14.037 2.646-20.861 4.766a.926.926 0 0 1-.164.037c-1.821.249-4.222.07-5.447 1.413-.205.224-.955.085-.996-.218-.021-.159-.172-.216-.325-.172-11.871 3.36-23.447 7.724-35.222 11.424-5.166 1.418-9.641 4.511-14.082 7.415-.491.276-.982.553-1.466.848-1.019.62-2.037 1.246-3.092 1.801-3.269 1.72-6.343 3.807-9.537 5.669-.167.098-.271.24-.268.435.006.473-.6.779-1.068.726-1.341-.153-2.504 1.58-3.662 2.337-.321.196-.881.534-1.318.803a.744.744 0 0 0-.351.695l.004.05c.042.509-.461.898-.954.772a.664.664 0 0 0-.607.15c-3.739 3.07-7.615 6.006-11.2 9.265a26.957 26.957 0 0 1-2.56 2.025c-2.669 1.89-5.057 4.163-7.533 6.296a.621.621 0 0 0-.199.615l.079.33c.11.459-.454.776-.827.488-.216-.166-.49-.102-.665.107-2.325 2.771-5.417 4.763-7.716 7.577-1.718 2.26-5.868 3.25-3.522 7.262-.63-1.482-2.626-1.783-3.753-.642-3.73 3.775-8.106 6.922-11.178 11.302a11.2 11.2 0 0 1-.48.676c-2.244 2.923-4.738 6.282-7.15 9.066-5.768 7.268-11.209 14.845-15.892 22.866a21.184 21.184 0 0 1-1.406 2.101c-8.859 11.699-14.797 25.283-22.082 37.966-2.894 4.731-4.383 10.116-6.36 15.262-1.896 5.433-4.222 10.799-4.756 16.59a4.347 4.347 0 0 1-.13.749c-1.101 4.02-3.048 8.352-2.244 12.511.066.339-.343.614-.613.4a.347.347 0 0 0-.56.231C1.34 220.373.066 234.715.921 248.954c.1 1.658-.038 3.319-.182 4.973-.505 5.81 1.15 11.587 2.157 17.284 1.803 8.634 3.287 17.336 5.111 25.969 1.177 7.259 1.548 14.626 2.587 21.907.16 1.857.356 3.73.546 5.59.054.663.06 1.351.163 2.016.16 1.028.499 2.094.501 3.135.001.353.034.659.085 1.009.276 1.879.285 3.792.511 5.688.025.211.19.379.4.412.472.073.562.723.126.919a7.39 7.39 0 0 0-.113.051.518.518 0 0 0-.296.566c.19 1.054.359 2.108.51 3.179.138 2.087.147 4.236.545 6.298.35 1.812.524 3.681.507 5.526-.015 1.589.256 3.223.987 4.556.405.74.548 1.67.183 2.427-.206.427-.235.881-.132 1.345.987 4.459.674 9.153 1.502 13.631.175.945.131 1.922.166 2.882.051 1.448 1.067 2.727 1.547 4.096.82 2.338 1.932 4.559 2.942 6.822 1.31 3.67 2.59 7.359 4.242 10.887 2.146 5.842 4.588 11.574 6.93 17.335 3.761 10.327 8.125 20.409 12.805 30.33.084.18.282.275.474.229l.107-.026c.358-.086.618.338.38.62a.384.384 0 0 0 .199.618l.13.033a.414.414 0 0 1 .24.631.422.422 0 0 0-.003.458c1.23 1.965 1.979 4.179 3.09 6.204 1.783 4.615 5.673 7.826 7.97 12.098a.368.368 0 0 0 .479.162l.021-.01c.36-.17.656.321.38.607-.11.114-.101.252-.026.391.79 1.453 1.922 3.452 3.016 1.111-.28.464-.448.925-.505 1.383-.198 1.616 1.628 1.18 2.955.249.678-.475 1.625-.771 1.621-1.603-.002-.56-.145-1.155-.265-1.719-.122-.573-.269-1.145-.495-1.685-.398-.955-.782-1.916-1.182-2.871.447.982 1.169 1.816 1.765 2.703 1.069 1.591 1.517 3.727.71 5.46-.41.879-.966 1.741-1.185 2.659a2.64 2.64 0 0 0-.016-1.065c-.17-.692-1.04-.66-1.558-.176a1.46 1.46 0 0 0-.178 1.921c2.974 4.106 5.915 8.242 8.99 12.267.346.43 1.029 1.263 1.375 1.693a77.244 77.244 0 0 1 1.774 2.836c.12.203.364.293.584.214.365-.131.747.211.772.6.123 1.884 2.096 3.311 3.202 4.904.23.333.493.634.837.848.454.284.81.718 1.038 1.204 1.036 2.21 2.737 4.011 4.21 5.933 3.376 4.29 6.74 8.605 10.157 12.868.177.22.409.367.683.429.433.099.784.44.935.86.755 2.1 2.304 3.824 3.866 5.426a15.293 15.293 0 0 1 1.729 2.164c2.624 3.906 5.983 7.272 9.576 10.283 4.825 5.317 9.861 10.57 15.541 14.975 8.843 5.519 17.626 11.125 26.515 16.564a.705.705 0 0 0 .585.071l.178-.056a.578.578 0 0 1 .751.56.582.582 0 0 0 .262.493c3.964 2.596 8.018 5.097 12.354 7.006.351.154.75.155 1.104.008l.038-.016a.905.905 0 0 0 .128-.065l.183-.113a.505.505 0 0 1 .723.214l.096.201c.046.096.106.185.177.265l.39.436a5.137 5.137 0 0 0 1.666 1.234c13.217 6.175 26.073 13.263 39.939 17.903 4.416 1.922 8.846 3.832 13.421 5.31.471.152.933.333 1.383.54 3.679 1.696 7.508 3.028 11.195 4.687a.333.333 0 0 0 .46-.222c.06-.242.354-.334.552-.185 2.097 1.584 4.779 1.929 7.206 2.768 10.469 2.811 20.794 6.167 31.333 8.71a6840.364 6840.364 0 0 0 35.61 6.65c.955.175 1.923.27 2.894.29 17.251.341 34.545 1.554 51.759-.115 4.776-.172 9.559-.383 14.323-.785 5.381-.052 10.614-1.546 15.906-2.379a26.15 26.15 0 0 0 2.446-.407c1.439-.311 2.929-.418 4.369-.722a9.14 9.14 0 0 0 .582-.143c1.398-.393 2.806-.808 4.26-.808 3.44-.438 6.82-1.228 10.247-1.721.94-.135 1.875-.315 2.788-.575 5.26-1.496 10.517-3.02 15.685-4.803 4.036-.859 7.813-2.569 11.811-3.554 2.901-.951 6.451-1.463 9.033-3.094 1.312-.829 2.719-1.511 4.161-2.086 2.612-1.042 4.958-2.739 7.486-3.964 4.321-1.619 8.347-3.943 12.391-6.141 1.056-.492 2.241-.836 3.196-1.502.756-.527 1.474-1.137 2.313-1.518 1.722-.782 3.315-2.275 4.963-3.205 1.109-.626 2.102-1.458 2.859-2.462a.732.732 0 0 1 .753-.282l.17.041a.596.596 0 0 0 .728-.681c-.06-.343.188-.66.528-.72 2.639-.47 4.87-2.554 6.92-4.314.393-.337.89-.576 1.356-.801 1.731-.834 3.575-2.323 5.21-3.333.893-.552 1.737-1.247 2.593-1.776a.614.614 0 0 0 .277-.379l.165-.689c.092-.386.631-.408.756-.03a.398.398 0 0 0 .668.146c4.354-4.683 9.518-8.514 14.133-12.922 2.492-2.446 5.463-4.562 7.785-7.193 1.924-2.179 3.933-4.575 5.808-6.796 3.71-4.469 7.425-8.925 11.132-13.384 5.799-6.772 10.257-14.565 15.586-21.705 2.749-3.956 5.422-7.968 8.212-11.896a1.34 1.34 0 0 0 .245-.668c.036-.412.071-.824.104-1.235a.495.495 0 0 1 .702-.412.494.494 0 0 0 .656-.241c2.637-5.665 5.861-11.028 8.65-16.613 2.235-3.756 2.903-8.154 4.017-12.322a1.153 1.153 0 0 0-.399-1.208 86.372 86.372 0 0 0-.458-.354.41.41 0 0 1-.127-.485.403.403 0 0 1 .563-.195l.298.161a.701.701 0 0 0 1.02-.485c.481-2.391.989-4.77 1.548-7.133.073-.31.172-.613.289-.909 2.008-5.076 2.963-10.484 4.135-15.792 1.565-6.734 3.003-13.495 4.616-20.218 1.46-5.366-.153-10.884.287-16.327-.157-4.465.032-9.058-1.22-13.389-.567-3.59-1.029-7.252-2.026-10.755a40.133 40.133 0 0 1-1.195-5.635c-.371-2.752-1.012-5.463-1.618-8.175-1.676-7.413-3.706-14.753-5.824-22.04-.262-.9-.597-1.778-.989-2.63-3.647-7.943-6.631-16.26-11.512-23.535-7.264-11.542-14.792-22.927-21.964-34.533-6.931-10.13-13.803-20.298-20.701-30.456-11.594-19.451-22.979-39.031-34.534-58.497-1.392-2.12-3.405-3.722-5.19-5.498-5.596-5.214-10.934-10.715-16.689-15.746-17.809-17.673-36.26-34.712-54.269-52.157a32875.924 32875.924 0 0 0-52.45-48.55c-2.971-2.811-6.11-5.465-8.821-8.541-7.79-8.747-15.5-17.576-23.289-26.323-.572-.672-1.246-1.228-1.96-1.734-1.391-.985-2.561-2.25-3.898-3.31-.69-.547-1.425-1.057-2.071-1.656a241.164 241.164 0 0 0-11.941-10.366z"
                fill="#fdc64d"
              ></path>
            </svg>
          </div>
          <p className="absolute text-ijo text-2xl max-w-sm font-bold">Interested in connecting with us? Contact us.</p>
        </div>
        <div className="flex items-center lg:w-1/2 bg-cream p-8 lg:px-20 lg:h-full rounded-xl">
          <div className="flex justify-center items-center space-x-8 mb-6">
            <h1 className="text-[50px] font-bold font-sf text-ijo">Our headquarters</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
