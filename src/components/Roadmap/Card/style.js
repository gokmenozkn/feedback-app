import { createUseStyles } from "react-jss";

/* VARIABLES */
const borderRadius = 0.625 + "rem";
const blue = "#62BCFA";
const purple = "#AD1FEA";
const red = "#F49F85";
const btnBackgroundPrimary = "#F2F4FF";

const label = {
  color: "#4661E6",
  backgroundColor: btnBackgroundPrimary,
  padding: ["0.25rem", "1.2rem"],
  borderRadius: borderRadius,
  fontWeight: 500,
};

const useCardStyle = createUseStyles({
  card: {
    backgroundColor: "#fff",
    padding: 2 + "em",
    borderRadius: borderRadius,
    display: "grid",
    gridTemplateRows: "auto",
    gridGap: "0.7em",
    borderTopWidth: 0.4 + "em",
    borderTopStyle: "solid",
    borderTopColor: (props) => {
      switch (props.status) {
        case "planned":
          return red;
        case "in-progress":
          return purple;
        case "live":
          return blue;
        default:
          return red;
      }
    },

    "& .card__status": {
      display: "flex",
      alignItems: "center",
      gap: "1em",

      "& .card__status__circle": {
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        backgroundColor: (props) => {
          switch (props.status) {
            case "planned":
              return red;
            case "in-progress":
              return purple;
            case "live":
              return blue;
            default:
              return red;
          }
        },
      },
    },
  },
  card__label: {
    extend: label,
    width: "fit-content",
  },
  card__bottom: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  card__bottom__upvote: {
    display: "flex",
    alignItems: "center",
    backgroundColor: btnBackgroundPrimary,
    gap: 0.3 + "em",
    padding: ["0.7em", "1em"],
    borderRadius: borderRadius,
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#CFD7FF"
    }
  },
  card__bottom__qty: {
    display: "flex",
    alignItems: "center",
    gap: "0.5em",
    borderRadius: borderRadius,

    "& h5": { fontSize: 1 + "rem" },
  },
});

export default useCardStyle;
