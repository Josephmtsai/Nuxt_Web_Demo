export default defineMyHandler(async (event) => {
  const config = useRuntimeConfig(event);

  return await $fetch(`${config.apiDomain}/api`);
});
