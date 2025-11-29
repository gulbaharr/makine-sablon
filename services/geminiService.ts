import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askAiAboutProduct = async (product: Product, question: string): Promise<string> => {
  try {
    const prompt = `
      Sen endüstriyel makineler konusunda uzman bir satış ve teknik destek mühendisisin.
      Aşağıdaki ürün hakkında potansiyel bir müşterinin sorusunu yanıtla.
      
      Ürün Bilgileri:
      İsim: ${product.name}
      Kategori: ${product.category}
      Kısa Açıklama: ${product.shortDescription}
      Tam Açıklama: ${product.fullDescription}
      Teknik Özellikler: ${JSON.stringify(product.specs)}
      
      Müşteri Sorusu: "${question}"
      
      Yanıtı Türkçe, profesyonel, güven verici ve teknik açıdan tutarlı bir dille ver. 
      Çok uzun olmasın (maksimum 3-4 cümle). Satışa teşvik edici bir ton kullan.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Üzgünüm, şu an bu soruya yanıt veremiyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bağlantı hatası oluştu. Lütfen daha sonra tekrar deneyiniz.";
  }
};