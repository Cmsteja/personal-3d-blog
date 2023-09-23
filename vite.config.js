import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    optimizeDeps: {
      exclude: ['lodash/isEmpty','lodash/map','lodash/forEach','lodash/values','lodash/has','lodash/clone','lodash/drop',
      'lodash/isString','lodash/isRegExp','lodash/pickBy','lodash/assign','lodash/some','lodash/every','lodash/includes','lodash/flatten'
      ,'lodash/uniq','lodash/isUndefined','regexp-to-ast','lodash/first','lodash/compact','lodash/isArray','lodash/reject',
    'lodash/difference','lodash/indexOf','lodash/isFunction','lodash/find','lodash/keys','lodash/filter','lodash/defaults',
    'lodash/reduce','lodash/noop','lodash/last','lodash/identity','lodash/groupBy','lodash/flatMap','lodash/dropRight',
  'lodash/isObject','lodash/upperFirst']
    },
    build: {
      rollupOptions: {
        external: ['lodash/isEmpty','lodash/map','lodash/forEach','lodash/values','lodash/has','lodash/clone','lodash/drop',
      'lodash/isString','lodash/isRegExp','lodash/pickBy','lodash/assign','lodash/some','lodash/every','lodash/includes','lodash/flatten'
      ,'lodash/uniq','lodash/isUndefined','regexp-to-ast','lodash/first','lodash/compact','lodash/isArray','lodash/reject',
    'lodash/difference','lodash/indexOf','lodash/isFunction','lodash/find','lodash/keys','lodash/filter','lodash/defaults',
    'lodash/reduce','lodash/noop','lodash/last','lodash/identity','lodash/groupBy','lodash/flatMap','lodash/dropRight',
  'lodash/isObject','lodash/upperFirst']
      }
    },
    "server.hmr.overlay":false
})
