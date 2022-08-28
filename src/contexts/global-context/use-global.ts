import React from 'react';
import GlobalContext from "./global-context"

export default function useGlobal() {
    const context = React.useContext(GlobalContext)
    if (context === undefined) {
      throw new Error('useGlobal must be used within a CountProvider')
    }
    return context
}