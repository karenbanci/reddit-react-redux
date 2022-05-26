import { timeSince } from "./cards-posts";


// testando o timeSince
test(
  "Epoch da publicação seja convertida em tempo real (segundos atras, minutos atras e etc)", () => {
    expect(timeSince(1553517862)).toBe("3 years ago");
  }
);
