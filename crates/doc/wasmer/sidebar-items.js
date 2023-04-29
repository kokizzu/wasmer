window.SIDEBAR_ITEMS = {"constant":[["HOST","The `Triple` of the current host."],["VERSION","Version number of this crate."],["WASM_MAX_PAGES","The number of pages we can have before we run out of byte index space."],["WASM_MIN_PAGES","The minimum number of pages allowed."],["WASM_PAGE_SIZE","WebAssembly page sizes are fixed to be 64KiB. Note: large page support may be added in an opt-in manner in the future."]],"derive":[["ValueType",""]],"enum":[["Architecture","The “architecture” field, which in some cases also specifies a specific subarchitecture."],["CallingConvention","The calling convention, which specifies things like which registers are used for passing arguments, which registers are callee-saved, and so on."],["CompileError","The WebAssembly.CompileError object indicates an error during WebAssembly decoding or validation."],["CpuFeature","The nomenclature is inspired by the `cpuid` crate. The list of supported features was initially retrieved from `cranelift-native`."],["CraneliftOptLevel","Possible optimization levels for the Cranelift codegen backend."],["DeserializeError","The Deserialize error can occur when loading a compiled Module from a binary."],["ExportError","The `ExportError` can happen when trying to get a specific export [`Extern`] from the `Instance` exports."],["ExportIndex","An entity to export."],["Extern","An `Extern` is the runtime representation of an entity that can be imported or exported."],["ExternType","A list of all possible types which can be externally referenced from a WebAssembly module."],["GlobalInit","Globals are initialized via the `const` operators or by referring to another import."],["InstantiationError","An error while instantiating a module."],["IoCompileError","IO Error on a Module Compilation"],["LLVMOptLevel","Defines the optimization level used to compile a `Module`."],["LinkError","The WebAssembly.LinkError object indicates an error during module instantiation (besides traps from the start function)."],["MemoryAccessError","Error for invalid [`Memory`][super::Memory] access."],["MemoryError","Error type describing things that can go wrong when operating on Wasm Memories."],["Mutability","Indicator of whether a global is mutable or not"],["OnCalledAction","After the stack is unwound via asyncify what should the call loop do next"],["OperatingSystem","The “operating system” field, which sometimes implies an environment, and sometimes isn’t an actual operating system."],["ParseCpuFeatureError","The error that can happen while parsing a `str` to retrieve a `CpuFeature`."],["SerializeError","The Serialize error can occur when serializing a compiled Module into a binary."],["Type","A list of all possible value types in WebAssembly."],["Value","WebAssembly computations manipulate values of basic value types:"],["WasmError","A WebAssembly translation error."]],"fn":[["is_wasm","Check if the provided bytes are wasm-like"],["wat2wasm","Parses in-memory bytes as either the WebAssembly Text format, or a binary WebAssembly module."]],"macro":[["imports","Generate an `Imports` easily with the `imports!` macro."]],"mod":[["access",""],["engine",""],["errors",""],["exports",""],["extern_ref",""],["externals",""],["function_env",""],["imports","The import module contains the implementation data structures and helper functions used to manipulate and access a wasm module’s imports including memories, tables, globals, and functions."],["instance",""],["into_bytes",""],["mem_access",""],["module",""],["native_type","This module permits to create native functions easily in Rust, thanks to its advanced typing system."],["ptr",""],["store",""],["sys",""],["typed_function","Native Functions."],["value",""],["vm","The `vm` module re-exports wasmer-vm types."]],"struct":[["Artifact","A compiled wasm module, ready to be instantiated."],["BaseTunables","Tunable parameters for WebAssembly compilation. This is the reference implementation of the `Tunables` trait, used by default."],["Bytes","Units of WebAssembly memory in terms of 8-bit bytes."],["Cranelift","Global configuration options used to create an `wasmer_engine::Engine` and customize its behavior."],["Engine","The engine type"],["EngineBuilder","The Builder contents of `Engine`"],["ExportType","A descriptor for an exported WebAssembly value."],["Exports","Exports is a special kind of map that allows easily unwrapping the types of instances."],["ExportsIterator","An iterator over exports."],["ExternRef","An opaque reference to some data. This reference can be passed through Wasm."],["Features","Controls which experimental features will be enabled. Features usually have a corresponding WebAssembly proposal."],["FrameInfo","Description of a frame in a backtrace for a `RuntimeError`."],["Function","A WebAssembly `function` instance."],["FunctionEnv","An opaque reference to a function environment. The function environment data is owned by the `Store`."],["FunctionEnvMut","A temporary handle to a [`FunctionEnv`]."],["FunctionType","The signature of a function that is either implemented in a Wasm module or exposed to Wasm by the host."],["Global","A WebAssembly `global` instance."],["GlobalType","WebAssembly global."],["ImportType","A descriptor for an imported value into a wasm module."],["Imports","All of the import data used when instantiating."],["Instance","A WebAssembly Instance is a stateful, executable instance of a WebAssembly [`Module`]."],["LLVM",""],["LocalFunctionIndex","Index type of a function defined locally inside the WebAssembly module."],["Memory","A WebAssembly `memory` instance."],["Memory32","Marker trait for 32-bit memories."],["Memory64","Marker trait for 64-bit memories."],["MemoryType","A descriptor for a WebAssembly memory type."],["MemoryView","A WebAssembly `memory` view."],["MiddlewareError","A error in the middleware."],["MiddlewareReaderState","The state of the binary reader. Exposed to middlewares to push their outputs."],["Module","A WebAssembly Module contains stateless WebAssembly code that has already been compiled and can be instantiated multiple times."],["Pages","Units of WebAssembly pages (as specified to be 65,536 bytes)."],["RuntimeError","A struct representing an aborted instruction execution, with a message indicating the cause."],["Singlepass",""],["Store","The store represents all global state that can be manipulated by WebAssembly programs. It consists of the runtime representation of all instances of functions, tables, memories, and globals that have been allocated during the lifetime of the abstract machine."],["StoreId","Unique ID to identify a context."],["StoreMut","A temporary handle to a [`Store`]."],["StoreRef","A temporary handle to a [`Store`]."],["Table","A WebAssembly `table` instance."],["TableType","A descriptor for a table in a WebAssembly module."],["Target","This is the target that we will use for compiling the WebAssembly ModuleInfo, and then run it."],["Triple","A target “triple”. Historically such things had three fields, though they’ve added additional fields over time."],["TypedFunction","A WebAssembly function that can be called natively (using the Native ABI)."],["WasmPtr","A zero-cost type that represents a pointer to something in Wasm linear memory."],["WasmRef","Reference to a value in Wasm memory."],["WasmSlice","Reference to an array of values in Wasm memory."],["WasmSliceAccess","Provides direct memory access to a piece of memory that is owned by WASM"],["WasmSliceIter","Iterator over the elements of a `WasmSlice`."]],"trait":[["AsEngineRef","Helper trait for a value that is convertible to a [`EngineRef`]."],["AsStoreMut","Helper trait for a value that is convertible to a [`StoreMut`]."],["AsStoreRef","Helper trait for a value that is convertible to a [`StoreRef`]."],["CompilerConfig","The compiler configuration options."],["Exportable","This trait is used to mark types as gettable from an `Instance`."],["FromToNativeWasmType","A trait to convert a Rust value to a `WasmNativeType` value, or to convert `WasmNativeType` value to a Rust value."],["FunctionMiddleware","A function middleware specialized for a single function."],["HostFunction","The `HostFunction` trait represents the set of functions that can be used as host function. To uphold this statement, it is necessary for a function to be transformed into a pointer to `VMFunctionBody`."],["IntoBytes","Convert binary data into [`bytes::Bytes`]."],["MemorySize","Trait for the `Memory32` and `Memory64` marker types."],["ModuleMiddleware","A shared builder for function middlewares."],["NativeEngineExt","The custom trait to access to all the `sys` function in the common engine."],["NativeWasmTypeInto","`NativeWasmTypeInto` performs conversions from and into `NativeWasmType` types with a context."],["Tunables","An engine delegates the creation of memories, tables, and globals to a foreign implementor of this trait."],["ValueType","Trait for a Value type. A Value type is a type that is always valid and may be safely copied."],["WasmTypeList","The `WasmTypeList` trait represents a tuple (list) of Wasm typed values. It is used to get low-level representation of such a tuple."]],"type":[["NativeFunc","This type is deprecated, it has been replaced by TypedFunction."],["OnCalledHandler","Call handler for a store."],["TrapHandlerFn","Function which may handle custom signals while processing traps."],["WasmPtr64","Alias for `WasmPtr<T, Memory64>."],["WasmResult","A convenient alias for a `Result` that uses `WasmError` as the error type."]]};