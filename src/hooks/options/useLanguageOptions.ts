import { LanguageEnum } from "@/enums/LanguageEnum"

export const useLanguageOptions = () => {
    return [
        { key: LanguageEnum.ENG, value: LanguageEnum.ENG },
        { key: LanguageEnum.RU, value: LanguageEnum.RU }
    ]
}