import { useMutation } from "react-query";
import { useStripe } from "@stripe/stripe-react-native";
import { Alert } from "react-native";
import StripeRepository from "../../repositories/StripeRepository";

function usePostStripePayment() {
  const postStripePaymentMutation = useMutation(
    StripeRepository.postStripePayment
  );

  const stripe = useStripe();

  const postStripePayment = async (pay) => {
    try {
      const response = await postStripePaymentMutation.mutateAsync(pay);

      // if (!response.ok) return Alert.alert(response.message);

      const clientSecret = response.clientSecret;

      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        // returnURL: '/'
      });

      // if (initSheet.error) return Alert.alert(initSheet.error.message);
      if (initSheet.error) return alert(initSheet.error);

      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });

      // if (presentSheet.error) return Alert.alert(presentSheet.error.message);
      if (presentSheet.error)
        return Alert.alert("PaymentFail", presentSheet.error.message);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return {
    postStripePayment,
    isLoading: postStripePaymentMutation.isLoading,
  };
}

export { usePostStripePayment };
