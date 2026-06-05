import type { ImageMetadata } from "astro";

export interface DestinationImageData {
  title: string;
  country: string;
  mainImage: string;
  imageAlt: string;
  imageCredit: string;
  imageCreditUrl: string;
  imageLicenseUrl?: string;
}

export interface DestinationImageAsset {
  src: ImageMetadata | string;
  alt: string;
  credit: string;
  creditUrl: string;
  licenseUrl?: string;
  focalPoint: string;
  nativeWidth?: number;
}

export interface DestinationImageMetadata {
  slug: string;
  title: string;
  country: string;
  image: {
    thumbnail: DestinationImageAsset;
    hero: DestinationImageAsset;
  };
}

const localDestinationImages = import.meta.glob<{ default: ImageMetadata }>(
  "../assets/destinations/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

const localImageBySource: Record<string, string> = {
  "/images/destinations/annapurna.png": "../assets/destinations/annapurna.png",
  "/images/destinations/anse-source-d-argent-1.jpg": "../assets/destinations/anse-source-d-argent-1.jpg",
  "/images/destinations/arniston-cover.jpg": "../assets/destinations/arniston-cover.jpg",
  "/images/destinations/budapest-cover.png": "../assets/destinations/budapest-cover.png",
  "/images/destinations/carpathian-mountains-cover.jpg": "../assets/destinations/carpathian-mountains-cover.jpg",
  "/images/destinations/chinguetti-5.jpg": "../assets/destinations/chinguetti-5.jpg",
  "/images/destinations/copacabana-cover.jpg": "../assets/destinations/copacabana-cover.jpg",
  "/images/destinations/danakil-depression-cover.jpg": "../assets/destinations/danakil-depression-cover.jpg",
  "/images/destinations/dettifoss-1.jpg": "../assets/destinations/dettifoss-1.jpg",
  "/images/destinations/fig-tree-beach-cover.jpg": "../assets/destinations/fig-tree-beach-cover.jpg",
  "/images/destinations/malta-3.jpg": "../assets/destinations/malta-3.jpg",
  "/images/destinations/mittenwald-cover.jpg": "../assets/destinations/mittenwald-cover.jpg",
  "/images/destinations/qatar-cover.jpg": "../assets/destinations/qatar-cover.jpg",
  "/images/destinations/registan-1.jpg": "../assets/destinations/registan-1.jpg",
  "/images/destinations/registan-1.png": "../assets/destinations/registan-1.png",
  "/images/destinations/rome-cover.jpg": "../assets/destinations/rome-cover.jpg",
  "/images/destinations/table-mountain-1.png": "../assets/destinations/table-mountain-1.png",
  "/images/destinations/valley-of-the-gods-cover.jpg": "../assets/destinations/valley-of-the-gods-cover.jpg",
  "/images/destinations/venice-cover.jpg": "../assets/destinations/venice-cover.jpg",
  "/images/destinations/victoria-falls-cover.jpg": "../assets/destinations/victoria-falls-cover.jpg",
  "/images/destinations/yangykala-canyon.png": "../assets/destinations/yangykala-canyon.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/48/Volcano_eruption_at_the_Danakil_depression%2C_Ethiopia..jpg":
    "../assets/destinations/danakil-depression-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/8e/Djanet-Algeria.jpg": "../assets/destinations/djanet-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c1/Fairy_Meadows%2C_Pakistan.jpg":
    "../assets/destinations/fairy-meadows-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c4/Cepphus_columba_columba%2C_Avachinskiy_Zaliv%2C_Kamchatka%2C_Russia_1.jpg":
    "../assets/destinations/kamchatka-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/39/Hermit_crab_in_a_seashell%2C_Koh_Yao_Noi%2C_Thailand.jpg":
    "../assets/destinations/koh-yao-noi-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e6/Stade_de_Luxembourg%2C_Luxembourg_vs_Azebaidjan_2021-09-01_%28101%29.jpg":
    "../assets/destinations/luxembourg-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/20/Border_Pamir_highway_China.jpg":
    "../assets/destinations/pamir-highway-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Sultan_Ahmed_Mosque_Istanbul_Turkey_retouched.jpg":
    "../assets/destinations/sultan-ahmed-mosque-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/70/HKBP_Tonga_Tonga%2C_Res._Pangaribuan_Tonga.jpg":
    "../assets/destinations/tonga-local.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/61/Zhangjiajie_National_Forest_Park_%E5%BC%A0%E5%AE%B6%E7%95%8C%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD%2C_Hunan%2C_2023_%2852669865292%29.jpg":
    "../assets/destinations/zhangjiajie-local.jpg",
};

const upgradedRemoteSources: Record<string, string> = {
  "https://live.staticflickr.com/90/281632834_98495709b5_m.jpg":
    "https://live.staticflickr.com/90/281632834_98495709b5_b.jpg",
  "https://live.staticflickr.com/4080/4819936081_5b24d10bc7_m.jpg":
    "https://live.staticflickr.com/4080/4819936081_5b24d10bc7_b.jpg",
  "https://live.staticflickr.com/3485/4571409361_90d7df5417_m.jpg":
    "https://live.staticflickr.com/3485/4571409361_90d7df5417_b.jpg",
  "https://live.staticflickr.com/8345/8175106370_cbd2abd513.jpg":
    "https://live.staticflickr.com/8345/8175106370_cbd2abd513_b.jpg",
  "https://live.staticflickr.com/51/152719503_9346cdc10f.jpg":
    "https://live.staticflickr.com/51/152719503_9346cdc10f_b.jpg",
  "https://live.staticflickr.com/3823/11434184726_3aacbaeaed.jpg":
    "https://live.staticflickr.com/3823/11434184726_3aacbaeaed_b.jpg",
  "https://live.staticflickr.com/1152/705748182_7abc4fe8f0.jpg":
    "https://live.staticflickr.com/1152/705748182_7abc4fe8f0_b.jpg",
};

const nativeWidthByRemotePattern = [
  { pattern: /_b\.(jpe?g|png|webp)$/i, width: 1024 },
  { pattern: /_m\.(jpe?g|png|webp)$/i, width: 240 },
  { pattern: /live\.staticflickr\.com\/.+\.(jpe?g|png|webp)$/i, width: 500 },
  { pattern: /inaturalist-open-data\.s3\.amazonaws\.com/i, width: 1600 },
];

const resolveSource = (source: string) => {
  const localKey = localImageBySource[source];
  if (localKey) {
    const localImage = localDestinationImages[localKey]?.default;
    if (localImage) return localImage;
  }
  return upgradedRemoteSources[source] ?? source;
};

const getNativeWidth = (src: ImageMetadata | string) => {
  if (typeof src !== "string") return src.width;
  return nativeWidthByRemotePattern.find(({ pattern }) => pattern.test(src))?.width;
};

export const getDestinationImageMetadata = (
  slug: string,
  data: DestinationImageData
): DestinationImageMetadata => {
  const src = resolveSource(data.mainImage);
  const image = {
    src,
    alt: data.imageAlt,
    credit: data.imageCredit,
    creditUrl: data.imageCreditUrl,
    licenseUrl: data.imageLicenseUrl,
    focalPoint: "center",
    nativeWidth: getNativeWidth(src),
  };

  return {
    slug,
    title: data.title,
    country: data.country,
    image: {
      thumbnail: image,
      hero: image,
    },
  };
};
