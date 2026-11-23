export default {
	// https://github.com/DavidAnson/markdownlint/blob/main/schema/markdownlint-config-schema.json
	$schema:
		'https://raw.githubusercontent.com/DavidAnson/markdownlint/v0.42.2/schema/markdownlint-config-schema.json',

	// https://github.com/DavidAnson/markdownlint#optionsconfig
	default: true,

	// https://github.com/DavidAnson/markdownlint#optionsconfig
	extends: null,

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md001.md
	MD001: {
		enabled: true,
		severity: 'error',
		front_matter_title: '^\\s*title\\s*[:=]',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md003.md
	MD003: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md004.md
	MD004: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md005.md
	MD005: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md007.md
	MD007: {
		enabled: true,
		severity: 'error',
		indent: 2,
		start_indented: false,
		start_indent: 2,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md009.md
	MD009: {
		enabled: true,
		severity: 'error',
		br_spaces: 2,
		code_blocks: false,
		list_item_empty_lines: false,
		strict: false,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md010.md
	MD010: {
		enabled: true,
		severity: 'error',
		code_blocks: true,
		ignore_code_languages: [],
		spaces_per_tab: 1,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md011.md
	MD011: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md012.md
	MD012: {
		enabled: true,
		severity: 'error',
		maximum: 1,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md013.md
	MD013: {
		enabled: true,
		severity: 'error',
		line_length: 80,
		heading_line_length: 80,
		code_block_line_length: 80,
		code_blocks: true,
		tables: true,
		headings: true,
		strict: false,
		stern: false,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md014.md
	MD014: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md018.md
	MD018: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md019.md
	MD019: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md020.md
	MD020: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md021.md
	MD021: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md022.md
	MD022: {
		enabled: true,
		severity: 'error',
		include_front_matter: false,
		lines_above: 1,
		lines_below: 1,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md023.md
	MD023: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md024.md
	MD024: {
		enabled: true,
		severity: 'error',
		siblings_only: false,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md025.md
	MD025: {
		enabled: true,
		severity: 'error',
		front_matter_title: '^\\s*title\\s*[:=]',
		level: 1,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md026.md
	MD026: {
		enabled: true,
		severity: 'error',
		punctuation: '.,;:!。，；：！',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md027.md
	MD027: {
		enabled: true,
		severity: 'error',
		list_items: true,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md028.md
	MD028: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md029.md
	MD029: {
		enabled: true,
		severity: 'error',
		style: 'one_or_ordered',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md030.md
	MD030: {
		enabled: true,
		severity: 'error',
		ul_single: 1,
		ol_single: 1,
		ul_multi: 1,
		ol_multi: 1,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md031.md
	MD031: {
		enabled: true,
		severity: 'error',
		list_items: true,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md032.md
	MD032: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md033.md
	MD033: {
		enabled: true,
		severity: 'error',
		allowed_elements: [],
		table_allowed_elements: [],
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md034.md
	MD034: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md035.md
	MD035: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md036.md
	MD036: {
		enabled: true,
		severity: 'error',
		punctuation: '.,;:!?。，；：！？',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md037.md
	MD037: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md038.md
	MD038: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md039.md
	MD039: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md040.md
	MD040: {
		enabled: true,
		severity: 'error',
		allowed_languages: [],
		language_only: false,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md041.md
	MD041: {
		enabled: true,
		severity: 'error',
		allow_preamble: false,
		front_matter_title: '^\\s*title\\s*[:=]',
		level: 1,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md042.md
	MD042: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md043.md
	MD043: {
		enabled: true,
		severity: 'error',
		headings: null,
		match_case: false,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md044.md
	MD044: {
		enabled: true,
		severity: 'error',
		names: [],
		code_blocks: true,
		html_elements: true,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md045.md
	MD045: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md046.md
	MD046: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md047.md
	MD047: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md048.md
	MD048: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md049.md
	MD049: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md050.md
	MD050: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md051.md
	MD051: {
		enabled: true,
		severity: 'error',
		ignore_case: false,
		ignored_pattern: '',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md052.md
	MD052: {
		enabled: true,
		severity: 'error',
		ignored_labels: ['x'],
		shortcut_syntax: false,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md053.md
	MD053: {
		enabled: true,
		severity: 'error',
		ignored_definitions: ['//'],
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md054.md
	MD054: {
		enabled: true,
		severity: 'error',
		autolink: true,
		inline: true,
		full: true,
		collapsed: true,
		shortcut: true,
		url_inline: true,
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md055.md
	MD055: {
		enabled: true,
		severity: 'error',
		style: 'consistent',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md056.md
	MD056: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md058.md
	MD058: {
		enabled: true,
		severity: 'error',
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md059.md
	MD059: {
		enabled: true,
		severity: 'error',
		prohibited_texts: ['click here', 'here', 'link', 'more'],
	},

	// https://github.com/DavidAnson/markdownlint/blob/main/doc/md060.md
	MD060: {
		enabled: true,
		severity: 'error',
		style: 'any',
		aligned_delimiter: false,
	},
}
