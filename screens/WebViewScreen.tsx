import { WebView } from "react-native-webview";

export default function WebViewScreen(props: any) {
  const uri = props.route.params.uri;

  return (
    <WebView
      originWhitelist={["*"]}
      source={{
        uri: uri,
      }}
    />
  );
}
