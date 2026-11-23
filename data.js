// ================= PLAN DATA (index 0 = Mon 23 Nov 2026 ... 48 = Sun 10 Jan 2027) =================

// ---------- Morning slot (8:00–8:40): Python challenge on Tue/Thu/Sat, 1 DSA problem on Mon/Wed/Fri, Sunday off ----------
const DSA = ["Two Sum","Valid Anagram","Valid Palindrome","Best Time to Buy and Sell Stock","Group Anagrams","Valid Parentheses","Top K Frequent Elements",
 "Binary Search","Longest Substring Without Repeating Characters","Merge Intervals","Reverse Linked List","Merge Two Sorted Lists","Linked List Cycle",
 "Product of Array Except Self","Maximum Depth of Binary Tree","Binary Tree Level Order Traversal","Kth Largest Element in an Array","Climbing Stairs",
 "Number of Islands","LRU Cache","3Sum"];
const PYCH = [
 "Nested list flatten kar: one recursive function + one generator (yield from)",
 "Tuza swatacha my_enumerate() and my_zip() generators vapra lih",
 "Text file madhun top 10 words kadh: collections.Counter + most_common",
 "Stack + Queue class bana: __len__, __bool__, __repr__, __iter__ sobat",
 "@ttl_cache(seconds=10) decorator lih: results expire hotat",
 "Context manager: temporary os.chdir() kar, block sampla ki parat original folder",
 "List of dicts 'city' ne group kar: itertools.groupby vs defaultdict(list), farak samjun ghe",
 "heapq.merge ne 2 sorted lists merge kar; heapq.nlargest ne top 3 kadh",
 "Singleton 3 prakare: module-level, __new__, metaclass, ani konta best te lih",
 "Log file parse kar: regex + Counter ne per-hour status codes count kar",
 "retry(max=5) with exponential backoff (1s, 2s, 4s...) decorator",
 "Do nested dicts deep-merge karnara function lih (recursive) + 3 tests",
 "List la n size chunks madhe tod: generator + itertools.batched (3.12)",
 "functools.lru_cache vapar ani cache_info() print kar: fibonacci(100)",
 "Employee dataclass: salary desc + name asc ne sort kar (key=lambda / attrgetter)",
 "Email + Indian phone number validate kar: re.fullmatch, 5 valid + 5 invalid tests",
 "Token-bucket rate limiter class pure Python madhe lih",
 "Thread-safe counter: Lock shivay race condition dakhav, mag Lock lavun fix kar",
 "asyncio: 5 fake API calls gather kar + asyncio.wait_for timeout handle kar",
 "Custom JSONEncoder: datetime + Decimal serialize kar",
 "LinkedList class: __iter__, __len__, __getitem__ (slicing pan) implement kar",
 "argparse CLI: CSV file gheun summary print kar (rows, columns, avg)",
 "@property ne age setter validation: negative age dila tar ValueError",
 "Nested dict 'tree' command sarkha pretty-print kar (recursive)"
];
function morningFor(i){
  const dow=(i+1)%7; // index 0 = Monday → dow 1
  const wk=Math.floor(i/7);
  if(dow===0) return ["☕ Morning: aaj break. Fakt kalchi notes 10 min revise kar"];
  if([1,3,5].includes(dow)){const n=DSA[wk*3+[1,3,5].indexOf(dow)];return [n?`🧩 DSA (25 min): "${n}" LeetCode var solve kar. Atakla tar solution vach, ani mag swata parat lih`:"🧩 DSA: mahitiche 1 problem parat solve kar, bina baghta"];}
  const c=PYCH[wk*3+[2,4,6].indexOf(dow)]||PYCH[(i*7)%PYCH.length];
  return ["🐍 Python challenge (30 min): "+c];
}

const STUDY = [
/*Mon 23 Nov*/["Setup day: aaj suru kar 🚀",[
 "Ek notebook/Notion page bana: 'Interview Notes'. Roj je seekhla te 5 lines madhe lih",
 "Python 3.12 + VS Code + Docker + PostgreSQL install/check kar",
 "Resume ki current copy ughad aur 3 weak points note kar (weekend la fix karu)",
 "Website madhe ⚙ More tab madhun sync setup kar (phone + laptop)"]],
/*0 Tue 24 Nov*/["Python: data model & OOP",[
 "📖 Seekh: dunder methods: __repr__ vs __str__, __eq__, __hash__, __len__, __getitem__, __iter__, __contains__, __call__",
 "📖 Seekh: @classmethod vs @staticmethod vs @property; class vs instance attributes",
 "📖 Seekh: multiple inheritance, MRO (C3 linearization), super(); check it with ClassName.__mro__",
 "💻 Code kar: write a Money class with __add__, __eq__, __hash__, __repr__ and @functools.total_ordering, plus 5 asserts",
 "🎤 Interview Q (write the answer in your notes): why must __eq__ and __hash__ be consistent? What happens if you put an unhashable object in a set?"]],
/*1 Wed*/["Python: closures & decorators",[
 "📖 Seekh: LEGB scope, nonlocal/global, closures (look at __closure__)",
 "📖 Seekh: decorator with and without arguments, functools.wraps, stacking order, class-based decorator",
 "💻 Code kar: @timer, @retry(times=3, delay=1, exceptions=(ValueError,)), @memoize, @require_role('admin') on a fake request dict",
 "🎤 Interview Q: how does Django's @login_required work internally? (open django/contrib/auth/decorators.py and read it)"]],
/*2 Thu*/["Python: iterators & generators",[
 "📖 Seekh: iterator protocol (__iter__/__next__, StopIteration), generator functions, yield from, generator.send()",
 "📖 Seekh: itertools: chain, islice, groupby, product, permutations, accumulate, count, cycle",
 "💻 Code kar: a generator pipeline: read a large CSV line by line → filter → transform → sum (memory stays constant)",
 "💻 Code kar: write your own MyRange class (an iterable that can be reused)",
 "🎤 Interview Q: list comprehension vs generator expression in memory? Why does Django have QuerySet.iterator()?"]],
/*3 Fri*/["Python: context managers & exceptions",[
 "📖 Seekh: the with statement, __enter__/__exit__ (exc_type, exc, tb), contextlib.contextmanager, suppress, ExitStack",
 "📖 Seekh: exception hierarchy, try/except/else/finally, raise ... from ..., custom exception classes",
 "💻 Code kar: a Timer context manager, plus a FakeTransaction context manager that rolls back on exception (the idea behind transaction.atomic)",
 "🎤 Interview Q: when does finally run? What happens if __exit__ returns True?"]],
/*4 Sat*/["PROJECT day 1 + Resume",[
 "Project 'ShopLite' (order management API): django-admin startproject, apps: accounts, catalog, orders",
 "Custom User model (AbstractUser) ON DAY ONE, AUTH_USER_MODEL set before the first migrate",
 "PostgreSQL via docker-compose, settings from .env (django-environ), split settings: base/dev/prod",
 "Models: Category, Product(price, stock, sku unique), Order(user, status, created_at), OrderItem(order, product, qty, price). Push to GitHub",
 "Resume: 1 page; every bullet = action + tech + impact with numbers (e.g. 'Reduced API latency 40% using select_related + Redis cache')",
 "Update the Naukri + LinkedIn headline: 'Python Django Developer | DRF | PostgreSQL | Redis | Celery | 2 yrs'"]],
/*5 Sun*/["Weekly review + applications",[
 "Revise the whole week's code + notes (1 hr)",
 "Apply to 10 jobs (Naukri, LinkedIn, Instahyre, Wellfound, Cutshort). Track them in a sheet",
 "Message 5 people at target companies on LinkedIn asking for a referral (short + specific)",
 "Weekly check-in: weight, face photo in the same light, 2 km time if you ran one"]],
/*6 Mon*/["Python: collections, functools, heapq",[
 "📖 Seekh: defaultdict, Counter (most_common), deque (appendleft/popleft O(1)), namedtuple, OrderedDict (move_to_end)",
 "📖 Seekh: functools.lru_cache, partial, reduce, singledispatch, cached_property; heapq (heappush, nlargest), bisect",
 "💻 Code kar: implement an LRU cache using OrderedDict (also see today's DSA)",
 "🎤 Interview Q: list.pop(0) vs deque.popleft() complexity? When would you use cached_property in a Django model?"]],
/*7 Tue 1 Dec*/["Python: typing & dataclasses",[
 "📖 Seekh: type hints: Optional, Union, list[int], dict[str, Any], Callable, TypeVar/Generic, TypedDict, Protocol, Literal",
 "📖 Seekh: dataclasses: field(default_factory), frozen=True, slots=True, __post_init__, ordering",
 "💻 Code kar: add type hints to ShopLite services/utility code, run mypy and fix 10 errors",
 "🎤 Interview Q: dataclass vs namedtuple vs pydantic model, when to use which?"]],
/*8 Wed*/["Python: descriptors & metaclasses (how the Django ORM works)",[
 "📖 Seekh: descriptor protocol __get__/__set__/__set_name__, data vs non-data descriptors, how @property is a descriptor",
 "📖 Seekh: __slots__, type() as a metaclass, __new__ vs __init__, __init_subclass__",
 "💻 Code kar: a PositiveInteger descriptor; a mini 'Model' base class that collects fields using __init_subclass__",
 "📖 Vach: django/db/models/base.py, class ModelBase(type). Write 5 lines on what it does"]],
/*9 Thu*/["Python: memory & internals (trap questions)",[
 "📖 Seekh: mutable vs immutable, 'is' vs '==', shallow vs deep copy, reference counting + garbage collector (cycles)",
 "📖 Seekh: mutable default argument trap, late binding in closures (lambda inside a loop), integer/string interning",
 "📖 Seekh: GIL: what it is, why it exists, effect on threads",
 "💻 Code kar: 10 'predict the output' snippets. Write your answer first, then run them"]],
/*10 Fri*/["Python: concurrency",[
 "📖 Seekh: threading vs multiprocessing vs asyncio; I/O-bound vs CPU-bound",
 "📖 Seekh: concurrent.futures (ThreadPoolExecutor, ProcessPoolExecutor), asyncio (async/await, gather, event loop, create_task)",
 "💻 Code kar: fetch 20 URLs: sequential vs threads vs asyncio+httpx. Time all 3 and write down the results",
 "🎤 Interview Q: will threads speed up CPU-heavy work in Python? Where do Django async views help?"]],
/*11 Sat*/["PROJECT day 2: DRF",[
 "DRF: ModelSerializer, nested writable serializer (Order with items), validate() for stock checks",
 "ViewSets + DefaultRouter, JWT auth (djangorestframework-simplejwt): register/login/refresh endpoints",
 "Permissions: IsAuthenticated + custom IsOwnerOrAdmin; pagination (PageNumber), django-filter, SearchFilter, OrderingFilter",
 "API docs with drf-spectacular (Swagger UI at /api/docs/). Commit + push"]],
/*12 Sun*/["Testing in Python + weekly review",[
 "pytest: fixtures, parametrize, monkeypatch, unittest.mock.patch, pytest-cov",
 "Write 10 tests for your week 1 code (Money, decorators, generators)",
 "🎙 Mock: record yourself explaining decorators, generators, GIL and MRO, 2 min each. Watch it back and improve",
 "Apply to 10 jobs + weekly check-in (weight, photo)"]],
/*13 Mon*/["Python interview drill",[
 "Write answers to 25 questions: list vs tuple, *args/**kwargs, deep copy, GIL, decorators, generators, is vs ==, mutable defaults, @staticmethod vs @classmethod, MRO, lambda, map/filter, comprehensions, __init__ vs __new__, context manager, exceptions, iterators, closures, slots, dataclass, async, threading, multiprocessing, memory management, pickling",
 "Mark the weak ones in red and revise them again on Sunday"]],
/*14 Tue 8 Dec*/["SQL: joins & NULLs",[
 "Setup: Postgres in Docker + load the 'pagila' (or dvdrental) sample DB, use psql or DBeaver",
 "📖 Seekh: INNER/LEFT/RIGHT/FULL/SELF/CROSS joins, NULL logic, COALESCE, IS NULL",
 "🧮 LeetCode SQL: Combine Two Tables, Employees Earning More Than Their Managers, Customers Who Never Order, Duplicate Emails"]],
/*15 Wed*/["SQL: GROUP BY, HAVING, CASE",[
 "📖 Seekh: aggregates, GROUP BY, HAVING vs WHERE, CASE WHEN, conditional aggregation SUM(CASE ...), COUNT(DISTINCT)",
 "🧮 LeetCode SQL: Managers with at Least 5 Direct Reports, Confirmation Rate, Monthly Transactions I, Immediate Food Delivery II, Count Salary Categories"]],
/*16 Thu*/["SQL: subqueries & CTEs",[
 "📖 Seekh: scalar / correlated subqueries, EXISTS vs IN (vs NOT IN with NULL trap), WITH (CTE), WITH RECURSIVE (org chart)",
 "🧮 LeetCode SQL: Second Highest Salary, Nth Highest Salary, Investments in 2016, Delete Duplicate Emails, Rising Temperature"]],
/*17 Fri*/["SQL: window functions (asked a lot in interviews)",[
 "📖 Seekh: ROW_NUMBER vs RANK vs DENSE_RANK, LAG/LEAD, SUM() OVER (running total), PARTITION BY, frames (ROWS BETWEEN 6 PRECEDING AND CURRENT ROW)",
 "🧮 LeetCode SQL: Rank Scores, Department Top Three Salaries, Consecutive Numbers, Restaurant Growth, Last Person to Fit in the Bus, Game Play Analysis IV"]],
/*18 Sat*/["PROJECT day 3: order flow done right",[
 "Order creation in services.py inside transaction.atomic(); lock product rows with select_for_update(); decrement stock with F('stock') - qty",
 "Order status state machine (PENDING → PAID → SHIPPED / CANCELLED), invalid transitions raise errors",
 "Admin: list_display, list_filter, search_fields, OrderItem inline, readonly totals",
 "pytest-django tests: order success, insufficient stock, concurrent order (2 threads) does not oversell"]],
/*19 Sun*/["SQL: indexes & EXPLAIN + weekly review",[
 "📖 Seekh: B-tree index, composite index left-prefix rule, covering index, partial index, why an index is sometimes NOT used (functions, LIKE '%x', low selectivity)",
 "💻 Code kar: create a 1M-row table with generate_series, run EXPLAIN ANALYZE before/after the index, note Seq Scan vs Index Scan and timings",
 "Apply to 10 jobs + 5 referral messages + weekly check-in"]],
/*20 Mon*/["SQL: transactions & schema design",[
 "📖 Seekh: ACID, isolation levels (Read Committed, Repeatable Read, Serializable), dirty/non-repeatable/phantom reads, row locks, deadlocks",
 "📖 Seekh: normalization 1NF/2NF/3NF, when to denormalize",
 "Design on paper: schema for a food delivery app (users, restaurants, menu, orders, payments, deliveries) with PK/FK/indexes",
 "🧮 LeetCode SQL: Trips and Users, Department Highest Salary, Exchange Seats, Movie Rating"]],
/*21 Tue 15 Dec*/["ORM: QuerySet fundamentals",[
 "📖 Seekh: lazy evaluation, when queries execute, result caching, chaining, get/filter/exclude, field lookups (__in, __icontains, __gte, __range, __isnull, span relations with __)",
 "📖 Seekh: values / values_list(flat=True), only / defer, exists() vs count() vs len(), first/last, distinct",
 "💻 Code kar: add django-debug-toolbar to ShopLite; print str(qs.query); log every SQL query in the dev settings"]],
/*22 Wed*/["ORM: the N+1 problem (asked in every interview)",[
 "📖 Seekh: select_related (FK/O2O → JOIN) vs prefetch_related (M2M/reverse FK → 2 queries + joining in Python)",
 "📖 Seekh: Prefetch('items', queryset=..., to_attr='...') for filtered prefetches",
 "💻 Code kar: create an N+1 in the OrderSerializer on purpose (order.items + item.product), fix it, then show the query count drop from N+1 to 2 or 3",
 "🧪 Test: use django_assert_num_queries / assertNumQueries so it never regresses"]],
/*23 Thu*/["ORM: F, Q, annotate, aggregate",[
 "📖 Seekh: F() for atomic updates (race condition safe), Q() with | & ~, annotate vs aggregate, Count/Sum/Avg with filter=Q(...), Case/When, Coalesce, ExpressionWrapper",
 "💻 ShopLite madhe code kar: top 5 customers by revenue; products never ordered; monthly revenue using TruncMonth; order total annotated on the list API"]],
/*24 Fri*/["ORM: Subquery, Exists, Window, raw SQL",[
 "📖 Seekh: Subquery + OuterRef, Exists, Window(Rank(), partition_by=...), RowNumber, raw(), connection.cursor(), qs.explain()",
 "💻 Code kar: latest order per customer (Subquery); rank products by sales inside each category (Window)",
 "Rewrite 5 SQL queries from SQL week as ORM queries and compare the generated SQL"]],
/*25 Sat*/["PROJECT day 4: performance + Redis",[
 "Management command seed_data: 100k products + 20k orders with Faker using bulk_create(batch_size=1000)",
 "📖 Seekh + use kar: bulk_update, qs.update(), iterator(chunk_size=2000), in_bulk",
 "Add Meta.indexes (composite), db_index, UniqueConstraint, CheckConstraint(stock >= 0)",
 "Redis cache (django-redis): cache the product list API, invalidate on product save; measure response time before/after"]],
/*26 Sun*/["ORM: models + migrations deep dive + weekly review",[
 "📖 Seekh: abstract vs multi-table vs proxy inheritance, custom Manager + QuerySet.as_manager(), on_delete options, related_name, through models, GenericForeignKey",
 "📖 Seekh: migrations: data migration (RunPython), squashmigrations, fixing conflicts, zero-downtime pattern (add nullable → backfill → set NOT NULL)",
 "Apply to 10 jobs + referrals + weekly check-in"]],
/*27 Mon*/["ORM interview drill",[
 "Write answers to 25 ORM questions (select_related vs prefetch, N+1, F vs Q, annotate vs aggregate, lazy QS, get_or_create race, update vs save, bulk ops caveats (no signals), transaction.atomic, select_for_update, only/defer, distinct, indexes, migrations...)",
 "Translate 10 SQL problems from SQL week into ORM"]],
/*28 Tue 22 Dec*/["Django: request lifecycle & middleware",[
 "📖 Seekh: WSGI vs ASGI, request → middleware → URL resolver → view → template/response → middleware",
 "📖 Seekh: middleware order, __call__ style, process_view / process_exception",
 "💻 Code kar: RequestTimingMiddleware (adds an X-Response-Time header) + a RequestID middleware that logs a request id on every log line"]],
/*29 Wed*/["Django: auth & security",[
 "📖 Seekh: authentication backends, sessions vs token vs JWT (pros/cons, refresh tokens, blacklisting), permissions, groups, object-level permissions",
 "📖 Seekh: CSRF, XSS, SQL injection, clickjacking, CORS (django-cors-headers), SECURE_* settings, password hashers",
 "Run python manage.py check --deploy on ShopLite and fix every warning"]],
/*30 Thu*/["Django: signals, CBVs, forms",[
 "📖 Seekh: pre_save/post_save/m2m_changed, why signals hide logic, transaction.on_commit for side effects",
 "📖 Seekh: CBVs (ListView, DetailView, CreateView), mixins + MRO, when to prefer FBVs",
 "📖 Seekh: Form/ModelForm validation order: field clean → clean_<field> → clean()"]],
/*31 Fri 25 Dec*/["DRF deep dive (light day, Christmas)",[
 "📖 Seekh: serializer flow: to_internal_value → validate_<field> → validate → create/update → to_representation",
 "📖 Seekh: SerializerMethodField, source=, read_only/write_only, context['request']; APIView vs GenericAPIView vs ViewSet, @action(detail=True)"]],
/*32 Sat*/["PROJECT day 5: Celery + throttling",[
 "Celery + Redis broker: send the order confirmation email async (triggered via transaction.on_commit)",
 "Celery beat: auto-cancel PENDING orders older than 30 min and restore stock; retries with backoff; make tasks idempotent",
 "DRF throttling (AnonRateThrottle, UserRateThrottle) + URL versioning /api/v1/"]],
/*33 Sun*/["Django testing + MOCK interview + weekly review",[
 "pytest-django + APIClient + factory_boy factories; mock the email/external calls; coverage above 80%",
 "Mock interview (Pramp / friend / record yourself): 1 DSA + 10 Django/ORM questions",
 "Apply to 10 jobs + weekly check-in"]],
/*34 Mon*/["Caching & performance",[
 "📖 Seekh: per-view cache, low-level cache API, cache key design + invalidation, Redis data types (string, hash, list, set, sorted set, TTL)",
 "📖 Seekh: CONN_MAX_AGE, gunicorn workers/threads, profiling with django-silk, slow query log",
 "🎤 Interview Q: how would you make a slow Django API fast? (write a 10-step answer)"]],
/*35 Tue 29 Dec*/["Docker & deployment",[
 "Dockerfile (slim image, non-root user), docker-compose: web + db + redis + celery + beat",
 "gunicorn, whitenoise for static files, env-based settings, health check endpoint",
 "DEPLOY ShopLite on Render / Railway (free tier). Put the live URL on your resume + GitHub README"]],
/*36 Wed*/["Git, CI, Linux",[
 "GitHub Actions: run ruff + black --check + pytest on every push; add a badge to the README",
 "Git: rebase vs merge, cherry-pick, stash, reset vs revert, resolving conflicts",
 "Linux basics: ps, top, grep, tail -f, ssh, systemctl, checking ports (lsof -i)"]],
/*37 Thu*/["System design basics",[
 "📖 Seekh: vertical vs horizontal scaling, load balancer, caching layers, CDN, DB replication (read replicas), sharding, CAP theorem, message queues",
 "Watch: 2–3 intro videos (ByteByteGo / Gaurav Sen) and write 1 page of notes"]],
/*38 Fri 1 Jan*/["REST API design (light day)",[
 "📖 Seekh: resource naming, HTTP methods + status codes, idempotency (PUT vs POST, idempotency keys), pagination (offset vs cursor), versioning, error format, rate limiting",
 "Review ShopLite's API against this list and fix 3 things"]],
/*39 Sat*/["System design: URL shortener + project polish",[
 "Write a design doc: requirements, API, DB schema, short code generation, cache, scaling to 100M URLs",
 "ShopLite README: architecture diagram, features, tech stack, how to run, live link, API docs link, tests badge"]],
/*40 Sun*/["FULL MOCK INTERVIEW 1 + weekly review",[
 "60 min: 1 DSA medium (30 min) + 15 Python/Django/ORM/SQL questions + project walkthrough",
 "Write down every question you couldn't answer → study it on Mon/Tue",
 "Apply to 15 jobs + follow up on old applications"]],
/*41 Mon*/["System design: rate limiter / notifications + AWS",[
 "Design a rate limiter (token bucket, Redis) and a notification system (queue, workers, retries)",
 "AWS basics for Django devs: EC2, S3 (django-storages), RDS, IAM, CloudWatch"]],
/*42 Tue 5 Jan*/["Revision: Python",[
 "Revise your Python notes + rapid-fire 30 questions aloud in 30 minutes",
 "Redo the 5 trickiest code snippets from week 1–2"]],
/*43 Wed*/["Revision: SQL + ORM",[
 "Redo the 10 hardest SQL problems with a timer (8 min each)",
 "Write ORM for: N+1 fix, latest-per-group, top-N per group, monthly report"]],
/*44 Thu*/["Revision: Django/DRF + project story",[
 "Prepare a 2-minute project pitch: problem → architecture → your hardest bug → result/metrics",
 "Revise middleware, auth, signals, caching, Celery; prepare 5 'what would you improve' answers"]],
/*45 Fri*/["Behavioral + HR round",[
 "Write + say aloud: Tell me about yourself (90 sec), Why switch?, Why this company?, expected CTC (research the range on AmbitionBox/Glassdoor)",
 "5 STAR stories: production bug, tight deadline, disagreement, ownership, learning something fast"]],
/*46 Sat*/["FULL MOCK INTERVIEW 2 + gaps",[
 "Mock with a friend / Pramp: DSA + Django + system design light",
 "Fix the gaps from mock 1 + 2; final resume update with the deployed project link"]],
/*47 Sun 10 Jan*/["Final review + next 30 days",[
 "Look at the balance sheet: what went well, what didn't",
 "Apply to 15 jobs; plan the next 30 days (more mocks, LeetCode medium daily, interviews)"]]
];

// ---------- Exercise ----------
// Each item: [name + count, kaise karaycha (how to do it)]
const WARMUP = [
 ["Fast walk: 3 min","Normal se thoda tez chal, haath hilate hue. Body garam honi chahiye."],
 ["Leg swings, aage-peeche: 10 baar per leg","Deewar ya pole pakad ke khada ho. Ek pair seedha aage-peeche jhula (football kick jaisa), aaram se. Phir dusra pair."],
 ["Leg swings, side-to-side: 10 baar per leg","Deewar ki taraf moonh karke dono haath deewar pe rakh. Ek pair ko body ke saamne se left-right jhula."],
 ["High knees: 20 baar (dono pair milake)","Ek jagah khade-khade jog kar, ghutne pet ki height tak upar la. Haath bhi chala."],
 ["Butt kicks: 20 baar","Ek jagah jog kar, lekin is baar edi (heel) peeche apne hips ko touch karne ki koshish kar."],
 ["Walking lunges: 10 kadam","Ek bada kadam aage le, peeche wala ghutna zameen ke paas tak neeche la (touch nahi). Uth ke dusre pair se agla kadam. Peeth seedhi."],
 ["Ankle circles: 10 baar har side","Ek pair thoda upar utha, ankle ko gol-gol ghuma, 10 clockwise + 10 anticlockwise. Phir dusra pair."]
];
const COOLDOWN = [
 ["Slow walk: 3 min","Dheere chal, saans normal hone de. Achanak ruk mat."],
 ["Calf stretch: 30 sec per leg","Deewar pe haath rakh. Ek pair peeche seedha, edi zameen pe dabi hui, aage wala ghutna mod. Pindli (calf) mein khinchav mehsoos hoga."],
 ["Hamstring stretch: 30 sec per leg","Ek pair seedha aage rakh, edi zameen pe, panja upar. Kamar se aage jhuk (peeth seedhi). Jaangh ke peeche khinchav."],
 ["Quad stretch: 30 sec per leg","Seedha khada ho, ek pair peeche mod ke usi side ke haath se pakad, edi hips ki taraf kheench. Balance ke liye deewar pakad le."],
 ["Hip flexor stretch: 30 sec per side","Ek ghutna zameen pe (neeche towel rakh), dusra pair aage 90°. Hips ko aage dhakel. Jaangh ke upar aage ki taraf khinchav."],
 ["Figure-4 glute stretch: 30 sec per side","Peeth ke bal let. Right pair ki ankle left ghutne pe rakh (4 jaisa shape). Left jaangh pakad ke chhaati ki taraf kheench."],
 ["Child's pose: 45 sec","Ghutno ke bal baith, edi pe hips rakh, haath aage lambe karke maatha zameen pe. Lambi saans le. Kamar relax."]
];
const STR_A = w=>{const p=w<2?0:w<4?1:2,s=[2,3,3][p],S=` · ${s} sets (har set ke baad 45 sec aaram)`;return [
 [`Squats: ${[12,15,20][p]} reps${S}`,"Pair kandhon jitne khule. Kursi pe baithne jaisa hips peeche le jaa, ghutne panje se aage na jaayein, jaangh zameen ke parallel tak. Edi se zor laga ke upar aa."],
 [`Reverse lunges: ${[8,10,12][p]} reps per leg${S}`,"Seedha khada ho. Ek pair bada kadam peeche le, dono ghutne 90° mod. Aage wale pair ki edi se dhakel ke wapas aa."],
 [`Glute bridge: ${[12,15,20][p]} reps${S}`,"Peeth ke bal let, ghutne mude, pair zameen pe. Hips upar utha jab tak kandhe-hips-ghutne seedhi line mein aayein. Upar 2 sec ruk, hips (glutes) tight kar, phir neeche."],
 [`Calf raises: ${[15,20,25][p]} reps${S}`,"Seedha khada ho (seedhi/step ki kinaar pe ho to aur achha). Panjon pe upar utha, 1 sec ruk, dheere neeche. Running ke liye bahut zaroori."],
 [`Plank: ${[20,30,45][p]} sec${S}`,"Kohni (elbows) kandhon ke neeche, body sar se edi tak seedhi line mein. Pet tight, hips na upar na neeche. Saans chalti rakh."],
 [`Side plank: ${[15,20,30][p]} sec per side${S}`,"Ek side let ke ek kohni pe body utha, pair ek ke upar ek. Hips upar, body seedhi. Mushkil lage to neeche wala ghutna zameen pe rakh."],
 [`Bird-dog: 10 per side${S}`,"Haath aur ghutno ke bal (table position). Right haath aage + left pair peeche ek saath seedha kar, 2 sec ruk, wapas. Phir ulta. Kamar hilni nahi chahiye."]
]};
const STR_B = w=>{const p=w<2?0:w<4?1:2,s=[2,3,3][p],S=` · ${s} sets (har set ke baad 45 sec aaram)`;return [
 [`Wall sit: ${[20,30,45][p]} sec${S}`,"Deewar se peeth lagake neeche khisak jab tak ghutne 90° (invisible kursi pe baithne jaisa). Haath jaangh pe nahi, saamne ya cross."],
 [`Step-ups: ${[8,10,12][p]} per leg${S}`,"Seedhi (stairs) ki ek step pe ek pura pair rakh, usi pair ke zor se upar chadh, phir dheere utar. Ek pair ke saare reps, phir dusra."],
 [`Single-leg glute bridge: ${[8,10,12][p]} per leg${S}`,"Glute bridge jaisa hi, lekin ek pair hawa mein seedha. Sirf ek pair ke zor se hips upar."],
 [`Push-ups: ${[6,10,12][p]} reps${S}`,"Haath kandhon se thode chaude, body seedhi. Chhaati zameen ke paas tak la, phir dhakel. Mushkil lage to ghutne zameen pe rakh ke kar, koi problem nahi."],
 [`Dead bug: 10 per side${S}`,"Peeth ke bal let, haath chhat ki taraf, ghutne 90° upar. Kamar zameen se chipki rahe. Right haath peeche + left pair aage seedha kar (zameen touch nahi), wapas, phir ulta."],
 [`Superman: ${[15,20,30][p]} sec hold${S}`,"Pet ke bal let, haath aage lambe. Haath, chhaati aur pair ek saath thoda zameen se upar utha, hold kar. Gardan seedhi, neeche dekh."],
 [`Single-leg calf raise: ${[10,12,15][p]} per leg${S}`,"Deewar pakad ke ek pair pe khada ho, us pair ke panje pe upar utha, dheere neeche. Shin pain se bachata hai."]
]};

// ---------- Juice: amla base daily (tu 10 divas pasun ghet ahes 👏), index = day of week (0 = Sunday) ----------
const JUICE = [
 ["Amla + beet + pomegranate","2 amla + ½ beetroot + 1 vati pomegranate + thoda ginger. Iron + antioxidants: skin, hair, stamina sathi"],
 ["Amla + ABC","2 amla + 1 apple + ½ beetroot + 2 carrots + ½ inch ginger. Glow + stamina"],
 ["Amla + carrot + orange","2 amla + 2 carrots + 1 orange + chimutbhar black salt. Vitamin C bomb 🍊 (pigmentation sathi best)"],
 ["Amla + tomato + cucumber","2 amla + 2 tomatoes + 1 cucumber + pudina (mint) + jeera powder. Lycopene: sun damage pasun protection"],
 ["Amla + green + kadhi patta","2 amla + 1 muthbhar spinach + 10 kadhi patta (curry leaves) + 1 cucumber + lemon. Hair fall sathi kadhi patta 🌿"],
 ["Papaya + orange smoothie","1 vati papaya + 2 oranges cha ras + 1 tsp flaxseed powder (+1 amla optional). Skin sathi vitamin A + C"],
 ["Banana + peanut recovery smoothie","1 banana + 1 tbsp peanut butter + 1 glass doodh + 2 tbsp oats + 1 tsp chia. Long run nantar protein 💪"]
];

// ---------- Nashta (bachelor-friendly, 5–10 min) ----------
const BREAKFAST = [
 ["Overnight oats","Raatri: ½ cup oats + 1 cup doodh/dahi + 1 tsp chia + kela. Sakali direct kha. 0 min cooking"],
 ["Peanut butter toast","2 brown bread toast + 1 tbsp peanut butter + 1 banana"],
 ["Besan chilla","4 tbsp besan + kanda + tomato + mirchi + paani, 2 chilla (10 min). Sobat dahi"],
 ["Poha","Poha + shengdane (peanuts) + kanda + limbu. 10 min. Sobat 1 glass doodh"],
 ["Paneer bhurji sandwich","100 g paneer bhurji (5 min) + 2 bread. High protein"],
 ["Sprouts + dahi","Market madhla ready moong sprouts + kanda + tomato + limbu + chaat masala, sobat 1 vati dahi"],
 ["Dahi + fruit + seeds bowl","1 vati dahi + 1 fruit + 1 tbsp pumpkin seeds + 5 almonds + 2 walnuts"]
];
const EVENING = [
 "Bhajlele chane (roasted chana), 1 muthbhar + 1 glass taak (buttermilk)",
 "Makhana roasted, 1 vati + green tea",
 "1 fruit (peru/guava, orange, apple) + 5 almonds",
 "Sprouts chaat (ready sprouts + kanda + limbu)",
 "Boiled sweet corn (butter kami) / bhutta",
 "Shengdana chikki 1 piece + taak",
 "Peanuts 1 muthbhar + 1 fruit"
];
const TIFFIN = [
 "🥜 Dabba 1: bhajlele chane + shengdane + makhana mix (dry, 2–3 divas tikto)",
 "🍎 Dabba 2: 1 fruit + 5 almonds + 2 walnuts + 2 dates (khajur)",
 "🌱 Dabba 3: sprouts (limbu + mith office madhe ghal)",
 "🧀 Dabba 4: paneer cubes + chaat masala (sakali 2 min)"
];

// ---------- Hair care ----------
const HAIR = {
  routine:[
   "Oil massage: Wednesday + Saturday raatri. Coconut oil + 3–4 drops rosemary oil. Botanchya tokane 5 min scalp massage kar (nakh nahi)",
   "Shampoo: mild (sulphate-free) shampoo, aathvadyat 2–3 vela. Fakt scalp la lav. Conditioner fakt lengths la",
   "Koomat paani (lukewarm). Garam paani nako. Shevti thanda paani",
   "Ole kes towel ne ghasu nako. Halke dab kar; wide-tooth kanghi vapar (ole kes brush nako)",
   "Helmet ghalat asshil tar aat cotton cloth/scarf ghal; helmet swachha thev",
   "Running nantar ghaam ala tar paani ne scalp rinse kar (roj shampoo nako)"
  ],
  food:[
   "Protein: hair = keratin = protein. Roj 60–70 g (paneer, dahi, doodh, dal, sprouts, soya, peanuts)",
   "Iron: palak, beetroot, dates (khajur), pomegranate, gul (jaggery, thoda). Sobat amla (vitamin C iron absorb karayla madat karto)",
   "Zinc + biotin: 1 tbsp pumpkin seeds + 5 almonds + shengdane, roj",
   "Omega-3: 2 walnuts + 1 tsp flax/chia, roj",
   "Kadhi patta: 8–10 paana chaav kiva juice madhe ghal (Thursday juice)",
   "Zop 6+ taas ani stress kami: kes galti mostly yamule vadhte"
  ],
  doctor:"Jar roj 100 peksha jasta kes galat astil, patches distat, kiva 6 weeks madhe kahi farak nahi, tar ek blood test kar: CBC, Ferritin, Vitamin D, Vitamin B12, TSH (thyroid). Ani dermatologist la dakhav. Minoxidil/finasteride sarkhi medicines fakt doctor ne sangitli tarach ghe."
};

// ---------- Interview question bank (short answers to revise) ----------
const IQ = [
 {cat:"🐍 Python", q:[
  ["List vs tuple?","List is mutable; tuple is immutable, hashable (if its items are), lighter and faster. Use a tuple for fixed records or dict keys."],
  ["*args and **kwargs?","*args collects extra positional args into a tuple; **kwargs collects keyword args into a dict. The same syntax also unpacks."],
  ["Shallow vs deep copy?","Shallow copy (copy.copy, list[:]) copies only the outer container, so inner objects are shared. copy.deepcopy copies everything recursively."],
  ["is vs ==?","'is' checks identity (same object), '==' checks value. Use 'is' only for None/True/False."],
  ["Mutable default argument trap?","Defaults are evaluated once, at def time, so a list default is shared across calls. Use None and create the list inside."],
  ["What is a decorator?","A function that takes a function and returns a wrapper that adds behaviour (logging, auth, caching). Use functools.wraps to keep the name and docstring. Example: @login_required."],
  ["Generator vs iterator?","An iterator implements __iter__ and __next__. A generator is an easy way to create one using yield. It's lazy, so memory is O(1). Useful for large files and streams."],
  ["What is the GIL?","CPython's Global Interpreter Lock: only one thread runs Python bytecode at a time. Threads still help with I/O-bound work; for CPU-bound work use multiprocessing."],
  ["Threading vs multiprocessing vs asyncio?","Threading: I/O-bound, shared memory. Multiprocessing: CPU-bound, separate processes. asyncio: thousands of I/O tasks on a single thread using an event loop + await."],
  ["@staticmethod vs @classmethod?","staticmethod gets neither self nor cls (a utility function). classmethod gets cls, used for alternative constructors like from_json(cls, ...)."],
  ["__new__ vs __init__?","__new__ creates and returns the instance; __init__ initialises it. __new__ is used for immutable types and singletons."],
  ["What is MRO?","Method Resolution Order: the order in which Python searches classes in multiple inheritance (C3 linearization). Check it with Class.__mro__. super() follows the MRO."],
  ["Context manager?","An object with __enter__/__exit__, used with 'with'. It guarantees cleanup (closing a file, releasing a lock, rolling back a transaction). Shortcut: @contextlib.contextmanager."],
  ["Closure?","An inner function that remembers the variables of its outer function even after the outer function has returned. Decorators are built on closures."],
  ["How does Python manage memory?","Private heap + reference counting + a cyclic garbage collector (for reference cycles). Small ints and some strings are cached/interned."],
  ["__str__ vs __repr__?","__str__ is for users (readable); __repr__ is for developers (unambiguous, ideally recreatable). print uses str, and falls back to repr."],
  ["What does __slots__ do?","Fixes the allowed attributes, with no per-instance __dict__. Saves memory and makes attribute access faster."],
  ["Descriptor?","An object with __get__/__set__/__delete__ that controls attribute access. property is built on it, and Django model fields work the same way."],
  ["Metaclass?","The class of a class (default: type). It controls how classes are created. Django's ModelBase is a metaclass that builds Model._meta."],
  ["How does a dict work?","A hash table: average O(1) lookup, keys must be hashable, insertion-ordered since 3.7."],
  ["try/except/else/finally?","else runs if no exception was raised; finally always runs. 'raise X from e' preserves the exception chain."],
  ["Python 3.8+ features you've used?","Walrus :=, f-string =debug, match-case (3.10), dataclasses, type hints, | for dict merge (3.9), asyncio improvements."]
 ]},
 {cat:"🌿 Django", q:[
  ["Django request lifecycle?","WSGI/ASGI server → middleware (request) → URL resolver → view → ORM/template → response → middleware (response) → client."],
  ["What is middleware? Example?","A hook that runs on every request/response, and order matters. Examples: Authentication, CSRF, Session, or a custom request-timing/logging middleware."],
  ["select_related vs prefetch_related?","select_related: ForeignKey/OneToOne, a single SQL JOIN. prefetch_related: M2M/reverse FK, a separate query joined in Python. Both fix N+1."],
  ["What is the N+1 problem?","1 query for the list, then 1 more for each row's related object, so 101 queries for 100 rows. Fix with select/prefetch_related and catch it with debug-toolbar/assertNumQueries."],
  ["F() vs Q()?","F refers to a field value in the DB, so it's race-safe (F('stock') - 1). Q builds complex conditions with OR/AND/NOT."],
  ["annotate vs aggregate?","annotate adds a value to every row (each order's total). aggregate returns a single dict for the whole queryset (total revenue)."],
  ["What does 'QuerySets are lazy' mean?","Building a QuerySet doesn't hit the DB. It executes on iteration, slicing with a step, len(), list(), bool(), or repr. The result is then cached."],
  ["Signals: when to use them, when not?","Good for decoupled side effects (e.g. creating a profile on user creation). They hide logic, are hard to debug, and don't fire on bulk ops. Prefer an explicit service layer. Use transaction.on_commit for emails/tasks."],
  ["transaction.atomic + select_for_update?","atomic: all or nothing. select_for_update locks rows until commit, which prevents race conditions like overselling stock."],
  ["Why a custom user model at the start?","Changing AUTH_USER_MODEL later is very hard. Starting with AbstractUser leaves room for future fields (phone, etc.)."],
  ["How do migrations work? Data migration?","makemigrations creates the schema diff, migrate applies it, and the django_migrations table tracks it. A data migration uses RunPython. Zero-downtime pattern: add nullable → backfill → NOT NULL."],
  ["How does CSRF protection work?","The server issues a token (cookie + form/header). Every POST must send a matching token, so a malicious site can't submit on your behalf."],
  ["Session vs JWT?","Session: server-side state, cookie, easy to revoke. JWT: stateless, signed token, scalable, but revoking needs short expiry + refresh tokens + a blacklist."],
  ["How would you speed up a slow Django API?","Measure first (debug-toolbar/silk) → fix N+1 → only/values → indexes → pagination → caching (Redis) → move heavy work to Celery → DB connection reuse → more gunicorn workers."],
  ["Why Celery? Its parts?","Background/async tasks (email, reports, retries). Parts: broker (Redis/RabbitMQ), workers, beat (scheduler), result backend. Tasks should be idempotent."],
  ["Caching in Django?","Per-site, per-view (cache_page), template fragment, low-level cache.get/set. Backend: Redis. The hard part is invalidation (on save/signal or with a TTL)."],
  ["Abstract vs proxy vs multi-table inheritance?","Abstract: shared fields, no table of its own. Proxy: same table, different behaviour/manager. Multi-table: a separate table for each class + an implicit OneToOne join."],
  ["update() vs save()?","save() is per object, fires signals, and runs full-object logic. qs.update() is one SQL UPDATE, faster, with no signals and no save() calls."],
  ["bulk_create caveats?","save() isn't called, signals don't fire, and PKs come back on Postgres only. Use batch_size."],
  ["get_or_create race condition?","Two requests can create a duplicate at the same time. Fix: a unique constraint in the DB + catch IntegrityError (get_or_create handles this internally if the constraint exists)."],
  ["WSGI vs ASGI?","WSGI: synchronous, one request per worker thread. ASGI: async, supports websockets and long-lived connections (Uvicorn/Daphne)."]
 ]},
 {cat:"🔌 DRF", q:[
  ["Serializer validation order?","Field validation (to_internal_value) → validate_<field>() → validate(attrs) → create()/update(). Output goes through to_representation."],
  ["APIView vs GenericAPIView vs ViewSet?","APIView: plain, write everything yourself. Generic + mixins: CRUD shortcuts. ViewSet + Router: full CRUD with automatic URLs, and @action for custom endpoints."],
  ["Authentication vs permission?","Authentication: who you are (JWT/Session/Token). Permission: what you're allowed to do (IsAuthenticated, IsOwner, object-level has_object_permission)."],
  ["Throttling + pagination?","Throttling: AnonRateThrottle/UserRateThrottle limit requests per minute. Pagination: PageNumber, LimitOffset, Cursor (best for large/real-time data)."],
  ["How do you handle a nested write?","Override create() in the serializer: pop the nested data, create the parent, then bulk_create the children, all inside transaction.atomic."]
 ]},
 {cat:"🗄 SQL", q:[
  ["WHERE vs HAVING?","WHERE filters rows before grouping; HAVING filters groups after GROUP BY (aggregate conditions)."],
  ["Types of JOIN?","INNER (only matches), LEFT (all from the left), RIGHT, FULL, SELF (a table joined to itself), CROSS (cartesian product)."],
  ["ROW_NUMBER vs RANK vs DENSE_RANK?","For ties 100,100,90: ROW_NUMBER 1,2,3; RANK 1,1,3; DENSE_RANK 1,1,2."],
  ["How does an index work? When isn't it used?","B-tree, so O(log n) lookup. Not used when there's a function on the column, LIKE '%x', low selectivity, or a composite index whose leftmost column isn't in the filter. Check with EXPLAIN ANALYZE."],
  ["Normalization?","1NF: atomic values. 2NF: no partial dependency. 3NF: no transitive dependency. Denormalize for read-heavy reporting."],
  ["ACID + isolation levels?","Atomicity, Consistency, Isolation, Durability. Levels: Read Uncommitted < Read Committed (Postgres default) < Repeatable Read < Serializable."],
  ["Second highest salary?","SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp); or DENSE_RANK() = 2."],
  ["DELETE vs TRUNCATE vs DROP?","DELETE: removes rows, can take WHERE, logged. TRUNCATE: removes all rows fast. DROP: removes the table itself."],
  ["UNION vs UNION ALL?","UNION removes duplicates (slower); UNION ALL keeps everything (faster)."]
 ]},
 {cat:"🗣 HR + Project", q:[
  ["Tell me about yourself (90 sec)","Name + 2 yrs as a Python/Django developer → current company/domain → 2 biggest achievements with numbers → tech stack → why you're looking now."],
  ["Why are you switching?","Stay positive: 'I want to work on bigger scale/challenges, grow in backend architecture...' Never criticise your current company."],
  ["Explain your project","Problem → architecture (Django, DRF, Postgres, Redis, Celery) → your role → the hardest bug and how you fixed it → result/metrics."],
  ["Biggest challenge / production bug?","STAR format: Situation, Task, Action (what you did), Result (with numbers)."],
  ["Expected CTC?","Check the range on AmbitionBox/Glassdoor. Say 'Based on my skills and market, I'm looking at X–Y'. Typically a 30–50% hike on a switch."],
  ["Questions to ask the interviewer","'What does the team's tech stack look like?', 'What would the first 3 months look like?', 'How do you do code reviews and deployment?'"]
 ]}
];

// ---------- 📵 Phone detox: priority #1 ----------
const PHONE_TARGET = [4,3.5,3,2.5,2,2,2]; // max screen time (hours) by week
const PHONE = [
 ["Phone bedroom chya baher charge kar","Raatri 11:30 la phone hall/kitchen madhe charging la thev. Alarm sathi ₹200 cha alarm clock ghe. This one rule alone fixes half the problem."],
 ["Pahila 1 tas phone nahi","Uthlya-uthlya phone nahi. Paani, run, aanghol, nashta, then phone. Taking the morning back from your phone = a day with more energy."],
 ["Instagram / YouTube Shorts / Reels app delete kar","Open them only in the browser if you have to. The friction (extra effort) cuts usage by 50%+. Turn off Shorts on YouTube or use it only on the laptop."],
 ["App timer lav","Android: Digital Wellbeing → App timers. iPhone: Screen Time → App Limits. Social media 30 min/day total. Once the limit is hit, it's over."],
 ["Grayscale mode ON","Settings → Accessibility → Colour filters / Bedtime mode → black & white. A colourless phone is boring = you pick it up less."],
 ["Notifications band","Keep only calls, WhatsApp (important chats) and office apps. Turn off everything else (Insta, Swiggy, shopping, news)."],
 ["Study / work time = phone dusrya room madhe","Turn on Focus mode / DND. Phone face-down, out of reach."],
 ["Replacement habit","Feeling the urge to scroll? Do 10 squats, drink a glass of water, or walk for 2 minutes instead. The urge passes in 2 minutes."],
 ["Raatri 11:00 la Screen Time check kar","Write the number in the tracker on the 'Aaj' page. If it's under the target, the 📵 habit ticks itself ✅"]
];

// ---------- 🪑 Office health + energy + fat loss ----------
const OFFICE = [
 ["Dar 45 min la utha","Set a laptop/phone reminder (or Stretchly app). Get up and walk for 2–3 min, fill your water bottle, stretch. Don't sit for more than 45 min at a stretch."],
 ["Basaychi padhat","Both feet flat on the floor, back straight against the chair, screen at eye level. Avoid tight jeans/belts. Use a soft cushion if needed."],
 ["Jevan nantar 10 min walk","After lunch and after dinner, a 10 min walk. Digestion improves, sleepiness drops, belly fat starts to go."],
 ["Roj 8000+ steps","Check the step counter on your phone. W1–2: 6000, W3–4: 8000, W5+: 10,000. Take the stairs, take phone calls walking."],
 ["Fiber + paani","2 fruits + salad/sabzi daily + 3 L water. At night 1 tsp isabgol in koomat paani. Digestion stays smooth."],
 ["Toilet madhe phone nako","Don't sit for more than 5 min, and don't strain. No phone in the bathroom. This is important."],
 ["Aalas (laziness) cha upay","After waking: cold water on your face + a glass of water + 10 min of sunlight/outdoors. Eat a light lunch. Avoid sugar (it causes energy crashes). Lay out tomorrow's clothes at night."],
 ["Fat loss rules","No sugar, maida, cold drinks, packaged snacks · protein in every meal · last meal by 9 pm · no late-night munching · strength 2×/week + running. Fat goes slowly but surely: 0.5 kg/week = ~3.5 kg in 49 days."],
 ["Weekly measure (Sunday)","Morning, empty stomach: weight + waist (tape measure at the belly button). Waist going down = belly fat going down. Write both in the tracker."]
];
