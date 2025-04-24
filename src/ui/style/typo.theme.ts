import { pxToRem } from "./muiTheme";

// theme를 사용 할 경우 타입 추론이 되지 않아 직접 작성함
const typo = {
  /**
   * @description SM / MD / LG / XL font-size
   * @xl 26px / 26px / 28px / 32px
   */
  display: {
    /**
     * @description font-size / line-height / font-weight
     * @SM 26px / 36px / 700
     * @MD 26px / 32px / 700
     * @LG 28px / 36px / 700
     * @XL 32px / 42px / 700
     */
    xl: {
      fontSize: pxToRem(26),
      lineHeight: pxToRem(36),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(26),
        lineHeight: pxToRem(32),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(32),
        lineHeight: pxToRem(42),
      },
    },
  },
  /**
   * @description SM / MD / LG / XL font-size
   * @xxl 24px / 24px / 26px / 28px
   * @xl 16px / 16px / 18px / 20px
   * @l 15px / 16px / 17px / 18px
   * @m 16px / 16px / 17px / 17px
   * @s 15px / 16px / 16px / 16px
   */
  heading: {
    /**
     * @description font-size / line-height / font-weight
     * @SM 24px / 36px / 700
     * @MD 26px / 36px / 700
     * @LG 26px / 36px / 700
     * @XL 28px / 36px / 700
     */
    xxl: {
      fontSize: pxToRem(24),
      lineHeight: pxToRem(36),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(26),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(36),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @SM 16px / 22px / 700
     * @MD 16px / 22px / 700
     * @LG 18px / 24px / 700
     * @XL 20px / 28px / 700
     */
    xl: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(24),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(24),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(18),
        lineHeight: pxToRem(24),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(20),
        lineHeight: pxToRem(28),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @SM 15px / 22px / 700
     * @MD 16px / 22px / 700
     * @LG 17px / 24px / 700
     * @XL 18px / 26px / 700
     */
    l: {
      fontSize: pxToRem(15),
      lineHeight: pxToRem(22),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(22),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(17),
        lineHeight: pxToRem(24),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(18),
        lineHeight: pxToRem(26),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @SM 16px / 22px / 700
     * @MD 16px / 22px / 700
     * @LG 17px / 24px / 700
     * @XL 17px / 24px / 700
     */
    m: {
      fontSize: pxToRem(16),
      lineHeight: pxToRem(22),
      fontWeight: 700,
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(17),
        lineHeight: pxToRem(24),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(17),
        lineHeight: pxToRem(24),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @SM 15px / 22px / 700
     * @MD 16px / 22px / 700
     * @LG 16px / 22px / 700
     * @XL 16px / 22px / 700
     */
    s: {
      fontSize: pxToRem(15),
      lineHeight: pxToRem(22),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(22),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(22),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(22),
      },
    },
  },
  /**
   * @description font-size / line-height / font-weight
   * @SM 14px / 18px / 500
   * @MD 14px / 20px / 500
   * @LG 14px / 20px / 500
   * @XL 14px / 20px / 500
   */
  caption: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(18),
    fontWeight: 500,
    "@media only screen and (min-width: 768px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
    "@media only screen and (min-width: 1024px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
    "@media only screen and (min-width: 1280px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(20),
    },
  },
  /**
   * @description font-size / line-height / font-weight / color
   * @SM 14px / 16px / 500 / #777777
   * @MD 14px / 18px / 500 / #777777
   * @LG 14px / 18px / 500 / #777777
   * @XL 14px / 18px / 500 / #777777
   */
  captionTime: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
    fontWeight: 500,
    color: "#777777",
    "@media only screen and (min-width: 768px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(18),
    },
    "@media only screen and (min-width: 1024px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(18),
    },
    "@media only screen and (min-width: 1280px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(18),
    },
  },
  /**
   * @description SM / MD / LG / XL font-size
   * @xl 24px / 28px / 30px / 32px
   * @l 22px / 24px / 24px / 26px
   * @m1 22px / 22px / 22px / 22px
   * @m2 미정 / 미정 / 미정 / 20px
   */
  title: {
    /**
     * @description font-size / line-height / font-weight
     * @sm 26px / 36px / 700
     * @md 28px / 36px / 700
     * @lg 30px / 36px / 700
     * @xl 32px / 36px / 700
     */
    xxl: {
      fontSize: pxToRem(26),
      lineHeight: pxToRem(36),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(30),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(32),
        lineHeight: pxToRem(36),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @sm 24px / 36px / 700
     * @md 28px / 36px / 700
     * @lg 30px / 36px / 700
     * @xl 32px / 36px / 700
     */
    xl: {
      fontSize: pxToRem(24),
      lineHeight: pxToRem(36),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(28),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(30),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(32),
        lineHeight: pxToRem(36),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @sm 22px / 36px / 700
     * @md 24px / 36px / 700
     * @lg 24px / 36px / 700
     * @xl 26px / 36px / 700
     */
    l: {
      fontSize: pxToRem(22),
      lineHeight: pxToRem(36),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(24),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(24),
        lineHeight: pxToRem(36),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(26),
        lineHeight: pxToRem(36),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @sm 22px / 32px / 700
     * @md 22px / 32px / 700
     * @lg 22px / 32px / 700
     * @xl 22px / 32px / 700
     */
    m1: {
      fontSize: pxToRem(22),
      lineHeight: pxToRem(32),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(22),
        lineHeight: pxToRem(32),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(22),
        lineHeight: pxToRem(32),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(22),
        lineHeight: pxToRem(32),
      },
    },
    /**
     * @description font-size / line-height / font-weight
     * @sm 미정
     * @md 미정
     * @lg 미정
     * @xl 20px / 24px / 700
     */
    m2: {
      /* 미정 */
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        /* 미정 */
      },
      "@media only screen and (min-width: 1024px)": {
        /* 미정 */
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(20),
        lineHeight: pxToRem(24),
      },
    },
  },
  /**
   * @description SM / MD / LG / XL font-size
   * @m 미정 / 미정 / 미정 / 16px
   */
  body: {
    /**
     * @description font-size / line-height / font-weight
     * @SM 미정
     * @MD 미정
     * @LG 미정
     * @XL 16px / 26px / 500
     */
    m: {
      fontWeight: 500,
      "@media only screen and (min-width: 768px)": {
        /* 미정 */
      },
      "@media only screen and (min-width: 1024px)": {
        /* 미정 */
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(16),
        lineHeight: pxToRem(26),
      },
    },
  },
  /**
   * @description font-size / line-height / font-weight / color
   * @SM 14px / 22px / 500 / #777777
   * @MD 14px / 22px / 500 / #777777
   * @LG 14px / 22px / 500 / #777777
   * @XL 14px / 22px / 500 / #777777
   */
  footnote: {
    fontSize: pxToRem(14),
    lineHeight: pxToRem(22),
    fontWeight: 500,
    color: "#777777",
    "@media only screen and (min-width: 768px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(22),
    },
    "@media only screen and (min-width: 1024px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(22),
    },
    "@media only screen and (min-width: 1280px)": {
      fontSize: pxToRem(14),
      lineHeight: pxToRem(22),
    },
  },
  /**
   * @description SM / MD / LG / XL font-size
   * @title 24px / 30px / 36px / 36px
   */
  article: {
    /**
     * @description font-size / line-height / font-weight
     * @SM 24px / 36px / 700
     * @MD 30px / 40px / 700
     * @LG 36px / 48px / 700
     * @XL 36px / 48px / 700
     */
    title: {
      fontSize: pxToRem(24),
      lineHeight: pxToRem(36),
      fontWeight: 700,
      "@media only screen and (min-width: 768px)": {
        fontSize: pxToRem(30),
        lineHeight: pxToRem(40),
      },
      "@media only screen and (min-width: 1024px)": {
        fontSize: pxToRem(36),
        lineHeight: pxToRem(48),
      },
      "@media only screen and (min-width: 1280px)": {
        fontSize: pxToRem(36),
        lineHeight: pxToRem(48),
      },
    },
    /**
     * @description SM / MD / LG / XL font-size
     * @xl 미정 / 미정 / 미정 / 미정
     * @l 미정 / 미정 / 미정 / 미정
     * @m 18px / 20px / 20px / 20px
     * @mStrong 18px / 20px / 20px / 20px
     */
    body: {
      /**
       * @description font-size / line-height / font-weight / letter-spacing
       * @SM 22px / 34px / 500 / -0.088em
       * @MD 24px / 38px / 500 / -0.096em
       * @LG 24px / 38px / 500 / -0.096em
       * @XL 24px / 38px / 500 / -0.096em
       */
      xl: {
        fontSize: pxToRem(22),
        lineHeight: pxToRem(34),
        fontWeight: 500,
        letterSpacing: "-0.088px",
        "@media only screen and (min-width: 768px)": {
          fontSize: pxToRem(24),
          lineHeight: pxToRem(38),
          letterSpacing: "-0.096px",
        },
        "@media only screen and (min-width: 1024px)": {
          fontSize: pxToRem(24),
          lineHeight: pxToRem(38),
          letterSpacing: "-0.096px",
        },
        "@media only screen and (min-width: 1280px)": {
          fontSize: pxToRem(24),
          lineHeight: pxToRem(38),
          letterSpacing: "-0.096px",
        },
      },
      /**
       * @description font-size / line-height / font-weight / letter-spacing
       * @SM 20px / 32px / 500 / -0.08em
       * @MD 22px / 36px / 500 / -0.088em
       * @LG 22px / 36px / 500 / -0.088em
       * @XL 22px / 36px / 500 / -0.088em
       */
      l: {
        fontSize: pxToRem(20),
        lineHeight: pxToRem(32),
        fontWeight: 500,
        letterSpacing: "-0.08px",
        "@media only screen and (min-width: 768px)": {
          fontSize: pxToRem(22),
          lineHeight: pxToRem(36),
          letterSpacing: "-0.088px",
        },
        "@media only screen and (min-width: 1024px)": {
          fontSize: pxToRem(22),
          lineHeight: pxToRem(36),
          letterSpacing: "-0.088px",
        },
        "@media only screen and (min-width: 1280px)": {
          fontSize: pxToRem(22),
          lineHeight: pxToRem(36),
          letterSpacing: "-0.088px",
        },
      },
      /**
       * @description font-size / line-height / font-weight / letter-spacing
       * @SM 18px / 30px / 500 / -0.072em
       * @MD 20px / 34px / 500 / -0.08em
       * @LG 20px / 34px / 500 / -0.08em
       * @XL 20px / 34px / 500 / -0.08em
       */
      m: {
        fontSize: pxToRem(18),
        lineHeight: pxToRem(30),
        fontWeight: 500,
        letterSpacing: "-0.072px",
        "@media only screen and (min-width: 768px)": {
          fontSize: pxToRem(20),
          lineHeight: pxToRem(34),
          letterSpacing: "-0.08px",
        },
        "@media only screen and (min-width: 1024px)": {
          fontSize: pxToRem(20),
          lineHeight: pxToRem(34),
          letterSpacing: "-0.08px",
        },
        "@media only screen and (min-width: 1280px)": {
          fontSize: pxToRem(20),
          lineHeight: pxToRem(34),
          letterSpacing: "-0.08px",
        },
      },
      /**
       * @description font-size / line-height / font-weight / letter-spacing
       * @SM 18px / 32px / 600 / -0.04em
       * @MD 20px / 34px / 600 / -0.04em
       * @LG 20px / 34px / 600 / -0.04em
       * @XL 20px / 34px / 600 / -0.04em
       */
      mStrong: {
        fontSize: pxToRem(18),
        lineHeight: pxToRem(32),
        fontWeight: 600,
        letterSpacing: "-0.04em",
        "@media only screen and (min-width: 768px)": {
          fontSize: pxToRem(20),
          lineHeight: pxToRem(34),
        },
        "@media only screen and (min-width: 1024px)": {
          fontSize: pxToRem(20),
          lineHeight: pxToRem(34),
        },
        "@media only screen and (min-width: 1280px)": {
          fontSize: pxToRem(20),
          lineHeight: pxToRem(34),
        },
      },
    },
  },
} as const;

export default typo;
