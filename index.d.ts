declare const config: {
	$schema: string
	default: boolean
	[rule: `MD${string}`]: Record<string, unknown>
}

export default config
