"use client";

import { FC, useState, useEffect, KeyboardEvent } from "react";
import IRatingProps from "./Rating.props";
import StarIcon from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";

export const Rating: FC<IRatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  ...otherProps
}) => {
  const [ratingArray, setRatingArray] = useState<Array<JSX.Element>>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const changeDispaly = (rating: number) => {
    if (!isEditable) return;

    constructRating(rating);
  };

  const changeRating = (newRating: number) => {
    if (!isEditable || !setRating) return;

    setRating(newRating);
  };

  const handleSpace = (newRating: number, evt: KeyboardEvent<SVGAElement>) => {
    if (evt.code !== "Space" || !setRating) return;

    setRating(newRating);
  };

  const constructRating = (currentRating: number) => {
    const updateArray = ratingArray.map(
      (ratingOfItem: JSX.Element, index: number) => {
        return (
          <span
            key="index"
            className={cn(styles.star, {
              [styles.editable]: isEditable,
              [styles.filled]: index < currentRating,
              [styles.last]: index === ratingArray.length - 1,
            })}
            onMouseEnter={() => changeDispaly(index + 1)}
            onMouseLeave={() => changeDispaly(rating)}
            onClick={() => changeRating(index + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(evt: KeyboardEvent<SVGAElement>) =>
                isEditable && handleSpace(index + 1, evt)
              }
            />
          </span>
        );
      }
    );

    setRatingArray(updateArray);
  };

  return (
    <div {...otherProps}>
      {ratingArray.map((rating: JSX.Element, index: number) => {
        return <span key={index}>{rating}</span>;
      })}
    </div>
  );
};
