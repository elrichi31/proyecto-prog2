import "../styles/globals.css";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <Component {...pageProps}></Component>
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default MyApp;
