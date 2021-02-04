export const OpenIconClassName = "ico-open";

export const OpenIcon = () => (
  <>
    <span className={`__visually-hidden`}>Open in new tab</span>
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="43.8px"
      height="43.8px"
      viewBox="0 0 43.8 43.8"
      className={`${OpenIconClassName}`}
      style={{
        overflow: "visible",
        ["enable-background" as any]: "new 0 0 43.8 43.8",
      }}
    >
      <defs></defs>
      <path
        d="M43.8,40.6L43.8,40.6l-2.8,2.8c-6-6-9-13.9-9-21.7c0-2.8,0.4-5.5,1.1-8.2L2.8,43.8L0,40.9l30.2-30.2
	c-2.7,0.7-5.4,1.1-8.2,1.1c-7.9,0-15.7-3-21.7-9L3.2,0c5.2,5.2,12,7.8,18.9,7.8c6.8,0,13.7-2.6,18.9-7.8l0,0l1.7,1.7l1.1,1.1h0l0,0
	l0,0c-5.2,5.2-7.8,12-7.8,18.9C35.9,28.6,38.6,35.4,43.8,40.6z M0.3,2.8L0.3,2.8C0.3,2.8,0.3,2.8,0.3,2.8L0.3,2.8z"
        fill="currentColor"
      />
    </svg>
  </>
);
