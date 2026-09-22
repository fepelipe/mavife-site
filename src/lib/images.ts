/** Local image assets - prefer optimized formats for CWV. */
export const images = {
  brand: {
    logo: {
      src: "/images/mavife-logo.png",
      alt: "Mavife Atelier Verde",
      width: 1024,
      height: 1024,
    },
    background: {
      src: "/images/mavife-background.webp",
      alt: "Textura mármore verde Mavife",
      width: 900,
      height: 900,
    },
    backgroundNav: {
      src: "/images/mavife-background-nav.webp",
      alt: "Textura mármore verde Mavife",
      width: 640,
      height: 640,
    },
    avatar: {
      src: "/images/mavife-avatar.png",
      alt: "Ícone botânico dourado Mavife sobre mármore verde",
      width: 1024,
      height: 1024,
    },
    plant: {
      src: "/images/mavife-plant.png",
      alt: "Ícone botânico Mavife",
      width: 512,
      height: 512,
    },
    name: {
      src: "/images/mavife-name.png",
      alt: "Mavife",
      width: 632,
      height: 206,
    },
    tagline: {
      src: "/images/mavife-tagline.png",
      alt: "Atelier Verde",
      width: 388,
      height: 54,
    },
    /** Combined menu lockup: plant + name + tagline on transparent background. */
    menuLockup: {
      src: "/images/mavife-menu-lockup.png",
      alt: "Mavife Atelier Verde",
      width: 1509,
      height: 512,
    },
  },
  og: {
    src: "/images/og-mavife.jpg",
    alt: "Arranjo com flora amazônica da Mavife Atelier Verde em Manaus",
    width: 1200,
    height: 630,
  },
  heroMonstera: {
    src: "/images/hero-monstera.jpg",
    alt: "Costela-de-adão em prateleira com decoração de interiores",
    width: 1200,
    height: 1600,
  },
  heroTerracotta: {
    src: "/images/hero-terracotta.jpg",
    alt: "Costela-de-adão em vaso de terracota, composição da Mavife Atelier Verde",
    width: 1600,
    height: 2400,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASAAwDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgb/xAAfEAACAgEEAwAAAAAAAAAAAAABAgADEQQSIYETQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/EABgRAQEBAQEAAAAAAAAAAAAAAAEAAhED/9oADAMBAAIRAxEAPwDFlQ+RZqxmO6jdhiCFVVJ3e8yRXqrQuOD1AGe1PXoDxLq71HjIwOZOdQG4AHUIRENv/9k=",
  },
  heroJungle: {
    src: "/images/hero-terracotta.jpg",
    alt: "Folhagens tropicais em ambiente acolhedor",
    width: 1600,
    height: 2400,
  },
  arrangementCenterpiece: {
    src: "/images/arrangement-centerpiece.jpg",
    alt: "Centro de mesa em bowl de pedra com suculentas mistas e pedras",
    width: 1600,
    height: 1200,
    // Bowl sits mid-frame; slight bias keeps the planter fully in crop.
    objectPosition: "center 55%",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDRaGGOAzXCKiAZxjk1kRagWdIgqbJG5+UZA9M1s6gFmtysil1HJC/zNYrWSyt5kB2KpwFx1NRKVik0ay21rLGGER2kdmIopLZXihCyEZyeB2oqlsSRai7J5BRip83qDjsadO7eSTuOcdc0UUpAh/8AyzoooqgP/9k=",
  },
  arrangementHydroponic: {
    src: "/images/arrangement-hydroponic.jpg",
    alt: "Estaca em frasco de vidro com água, hidroponia artesanal",
    width: 1600,
    height: 1200,
    // Bottles and roots live in the lower two-thirds.
    objectPosition: "center 68%",
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCbfdJGvmOr4OcrwfpRdW5vbf74Qg7jxk9KIis0eGUj61eiT5Se5rC1zVO2qKOl3clu62oVZFLdSNpA9feipYYVa8Mof7nAXHX3oqloLXqJAASMir0f+sT6iiihB0EuFAujgAcnoKKKKYH/2Q==",
  },
  arrangementKokedama: {
    src: "/images/arrangement-kokedama.jpg",
    alt: "Kokedama de Alocasia em bola de musgo sobre base de madeira",
    width: 1600,
    height: 1200,
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpMcCq1zZxTzIXB4GTj+IA9DVgnpWBdavjUOOBGSo9fepbsM6BDgmiokk3Dd6jNFUIramzLaZViDkdDXGyc6pg85kFFFSxnYWbFojkk89zRRRTA//Z",
  },
  arrangementPots: {
    src: "/images/arrangement-pots.jpg",
    alt: "Vasinhos com suculentas e ferns em cerâmica e terracota",
    width: 1600,
    height: 1200,
    blurDataURL:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAASABgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwBhkHlOycSKeQamhm8yQ7fn44A6AeuarGJbm4VEd1BGS2M59qZeNHaSCFJCzbeW/pUXuLlaNA3MS8bgxPAwaKqaYksrCSGRQQeQ+TRS3K1RHbEgrg9x/I0+2VWmO5QcnnI96KKx+ydK+I1LcATkAYG3tRRRWsNjKp8R/9k=",
  },
  aboutFlorist: {
    src: "/images/mavife-avatar.png",
    alt: "Marca Mavife Atelier Verde, atelier de flora artesanal em Manaus",
    width: 1024,
    height: 1024,
  },
  interiorPlants: {
    src: "/images/interior-plants.jpg",
    alt: "Sala decorada com plantas tropicais e luz natural",
    width: 800,
    height: 600,
  },
} as const;
