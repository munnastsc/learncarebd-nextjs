self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/ai-26(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\\\.json)?[\\/#\\?]?$",
    "originalSource": "/ai-26/:path*"
  },
  {
    "regexp": "^(?:\\/(_next\\/data\\/[^/]{1,}))?\\/api\\/ai-26(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\\\.json)?[\\/#\\?]?$",
    "originalSource": "/api/ai-26/:path*"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()