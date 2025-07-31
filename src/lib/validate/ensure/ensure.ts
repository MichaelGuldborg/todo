export function ensure(
  condition: unknown,
  message?: string,
): asserts condition {
  if (condition) {
    return;
  }

  throw new Error(message);
}
