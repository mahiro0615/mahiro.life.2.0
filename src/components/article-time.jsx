import { format } from "date-fns";

export function ArticleTime({ date, ...rest }) {
  return (
    <time dateTime={date} {...rest}>
      {format(new Date(date), "MMMM dd, yyyy")}
    </time>
  );
}