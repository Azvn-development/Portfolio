import { localizationSelectors } from "@/redux/localization/selector";
import { useSelector } from "react-redux";

export const useLocalization = () => {
    const translation = useSelector(localizationSelectors.translation);

    return {
        Header: translation.Header,
        Main: translation.Main,
        Footer: translation.Footer
    };
}